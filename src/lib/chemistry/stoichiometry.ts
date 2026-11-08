import type { ParsedCompound } from './parser';
import { getElement } from './elements';

export const AVOGADRO = 6.02214076e23;
export const STP_MOLAR_VOLUME = 22.414; // L/mol at 0°C (273.15 K) and 1 atm

export type StoichiometryUnit = 'g' | 'kg' | 'mg' | 'mol' | 'mmol' | 'L' | 'molecules';

export interface ElementMassBreakdown {
  symbol: string;
  name: string;
  count: number;
  atomicMass: number;
  totalMass: number;
  percentMass: number;
}

export interface CompoundStoichProfile {
  id: string; // unique identifier
  isReactant: boolean;
  cleanFormula: string;
  rawFormula: string;
  coefficient: number;
  molarMass: number;
  breakdown: ElementMassBreakdown[];
}

export interface CalculatedSubstanceAmount {
  profile: CompoundStoichProfile;
  moles: number;
  massGrams: number;
  volumeStpLiters: number;
  moleculesCount: number;
}

export interface LimitingReagentResult {
  limitingIndex: number;
  limitingProfile: CompoundStoichProfile;
  reactionExtentMoles: number;
  reactantsStatus: {
    profile: CompoundStoichProfile;
    initialMoles: number;
    initialGrams: number;
    consumedMoles: number;
    consumedGrams: number;
    remainingMoles: number;
    remainingGrams: number;
    percentConsumed: number;
    isLimiting: boolean;
  }[];
  theoreticalYields: {
    profile: CompoundStoichProfile;
    theoreticalMoles: number;
    theoreticalGrams: number;
    theoreticalLiters: number;
  }[];
}

// Build stoichiometric profiles for all compounds in a balanced equation
export function buildStoichiometricProfiles(
  reactants: { compound: ParsedCompound; coefficient: number }[],
  products: { compound: ParsedCompound; coefficient: number }[]
): CompoundStoichProfile[] {
  const profiles: CompoundStoichProfile[] = [];

  const processList = (list: { compound: ParsedCompound; coefficient: number }[], isReactant: boolean) => {
    list.forEach((item, index) => {
      const { compound, coefficient } = item;
      const breakdown: ElementMassBreakdown[] = [];
      const totalMolarMass = compound.molarMass;

      for (const [symbol, count] of Object.entries(compound.elementCounts)) {
        const el = getElement(symbol);
        const atomicMass = el ? el.mass : 0;
        const totalMass = atomicMass * count;
        const percentMass = totalMolarMass > 0 ? (totalMass / totalMolarMass) * 100 : 0;

        breakdown.push({
          symbol,
          name: el ? el.name : symbol,
          count,
          atomicMass,
          totalMass,
          percentMass
        });
      }

      profiles.push({
        id: `${isReactant ? 'reactant' : 'product'}_${index}`,
        isReactant,
        cleanFormula: compound.cleanFormula,
        rawFormula: compound.raw,
        coefficient,
        molarMass: totalMolarMass,
        breakdown
      });
    });
  };

  processList(reactants, true);
  processList(products, false);

  return profiles;
}

// Convert any input amount and unit to moles
export function convertToMoles(amount: number, unit: StoichiometryUnit, molarMass: number): number {
  if (amount <= 0 || isNaN(amount)) return 0;

  switch (unit) {
    case 'mol':
      return amount;
    case 'mmol':
      return amount / 1000;
    case 'g':
      return amount / molarMass;
    case 'kg':
      return (amount * 1000) / molarMass;
    case 'mg':
      return amount / 1000 / molarMass;
    case 'L':
      return amount / STP_MOLAR_VOLUME;
    case 'molecules':
      return amount / AVOGADRO;
    default:
      return amount / molarMass;
  }
}

// Recalculate all amounts in reaction given moles of one substance
export function calculateReactionQuantitiesFromMoles(
  profiles: CompoundStoichProfile[],
  sourceIndex: number,
  sourceMoles: number
): CalculatedSubstanceAmount[] {
  if (sourceMoles <= 0 || isNaN(sourceMoles) || sourceIndex < 0 || sourceIndex >= profiles.length) {
    return profiles.map((p) => ({
      profile: p,
      moles: 0,
      massGrams: 0,
      volumeStpLiters: 0,
      moleculesCount: 0
    }));
  }

  const sourceProfile = profiles[sourceIndex];
  const reactionExtent = sourceMoles / sourceProfile.coefficient;

  return profiles.map((p) => {
    const moles = reactionExtent * p.coefficient;
    const massGrams = moles * p.molarMass;
    const volumeStpLiters = moles * STP_MOLAR_VOLUME;
    const moleculesCount = moles * AVOGADRO;

    return {
      profile: p,
      moles,
      massGrams,
      volumeStpLiters,
      moleculesCount
    };
  });
}

// Calculate Limiting Reagent and Excess quantities given input amounts for reactants
export function calculateLimitingReagent(
  profiles: CompoundStoichProfile[],
  reactantInputs: { amount: number; unit: StoichiometryUnit }[]
): LimitingReagentResult | null {
  const reactantProfiles = profiles.filter((p) => p.isReactant);
  const productProfiles = profiles.filter((p) => !p.isReactant);

  if (reactantInputs.length !== reactantProfiles.length) return null;

  const initialMolesList: number[] = [];
  const initialGramsList: number[] = [];
  const extents: number[] = [];

  for (let i = 0; i < reactantProfiles.length; i++) {
    const input = reactantInputs[i];
    const p = reactantProfiles[i];
    const moles = convertToMoles(input.amount, input.unit, p.molarMass);
    const grams = moles * p.molarMass;

    initialMolesList.push(moles);
    initialGramsList.push(grams);

    if (moles <= 0) {
      return null; // All reactants must have valid positive inputs for limiting calculation
    }

    extents.push(moles / p.coefficient);
  }

  // Find minimum extent
  let minExtent = extents[0];
  let limitingIndex = 0;

  for (let i = 1; i < extents.length; i++) {
    if (extents[i] < minExtent) {
      minExtent = extents[i];
      limitingIndex = i;
    }
  }

  const reactantsStatus = reactantProfiles.map((p, i) => {
    const initialMoles = initialMolesList[i];
    const initialGrams = initialGramsList[i];
    const consumedMoles = minExtent * p.coefficient;
    const consumedGrams = consumedMoles * p.molarMass;
    const remainingMoles = Math.max(0, initialMoles - consumedMoles);
    const remainingGrams = remainingMoles * p.molarMass;
    const percentConsumed = (consumedMoles / initialMoles) * 100;

    return {
      profile: p,
      initialMoles,
      initialGrams,
      consumedMoles,
      consumedGrams,
      remainingMoles,
      remainingGrams,
      percentConsumed,
      isLimiting: i === limitingIndex
    };
  });

  const theoreticalYields = productProfiles.map((p) => {
    const theoreticalMoles = minExtent * p.coefficient;
    const theoreticalGrams = theoreticalMoles * p.molarMass;
    const theoreticalLiters = theoreticalMoles * STP_MOLAR_VOLUME;

    return {
      profile: p,
      theoreticalMoles,
      theoreticalGrams,
      theoreticalLiters
    };
  });

  return {
    limitingIndex,
    limitingProfile: reactantProfiles[limitingIndex],
    reactionExtentMoles: minExtent,
    reactantsStatus,
    theoreticalYields
  };
}

