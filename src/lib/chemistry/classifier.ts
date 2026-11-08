import type { ParsedCompound } from './parser';

export interface ReactionClassification {
  primaryType: string;
  allTypes: string[];
  description: string;
  explanation: string;
}

export function classifyReaction(
  reactants: ParsedCompound[],
  products: ParsedCompound[]
): ReactionClassification {
  const types: string[] = [];
  const explanations: string[] = [];

  const numR = reactants.length;
  const numP = products.length;

  // Helper: check if a compound is an element (only 1 element type)
  const isElement = (c: ParsedCompound) => Object.keys(c.elementCounts).length === 1;

  // 1. Combustion
  const hasOxygenReactant = reactants.some((r) => r.cleanFormula === 'O2' || (Object.keys(r.elementCounts).length === 1 && r.elementCounts['O'] > 0));
  const hasCO2Product = products.some((p) => p.cleanFormula === 'CO2');
  const hasH2OProduct = products.some((p) => p.cleanFormula === 'H2O');
  const hasHydrocarbon = reactants.some((r) => r.elementCounts['C'] > 0 && r.elementCounts['H'] > 0);

  if (hasOxygenReactant && (hasCO2Product || hasH2OProduct || hasHydrocarbon)) {
    types.push('Combustion');
    explanations.push(
      'A substance combines rapidly with diatomic oxygen (O₂) to release heat and energy, producing oxides such as carbon dioxide and water vapor.'
    );
  }

  // 2. Synthesis / Combination (A + B -> AB)
  if (numR >= 2 && numP === 1) {
    types.push('Synthesis (Combination)');
    explanations.push(
      `Two or more simpler reactants (${reactants.map(r => r.cleanFormula).join(', ')}) combine to form a single complex product (${products[0].cleanFormula}).`
    );
  }

  // 3. Decomposition (AB -> A + B)
  if (numR === 1 && numP >= 2) {
    types.push('Decomposition');
    explanations.push(
      `A single reactant compound (${reactants[0].cleanFormula}) breaks down into two or more distinct products (${products.map(p => p.cleanFormula).join(', ')}).`
    );
  }

  // 4. Acid-Base Neutralization
  const hasAcid = reactants.some((r) => {
    const f = r.cleanFormula;
    return (
      (f.startsWith('H') && Object.keys(r.elementCounts).length > 1 && f !== 'H2O' && f !== 'H2O2') ||
      f === 'CH3COOH'
    );
  });
  const hasBase = reactants.some((r) => {
    const f = r.cleanFormula;
    return f.includes('OH') || f.endsWith('(OH)2') || f.endsWith('(OH)3') || f === 'NH3';
  });
  const producesWater = products.some((p) => p.cleanFormula === 'H2O');

  if (hasAcid && hasBase && producesWater) {
    types.push('Acid-Base Neutralization');
    explanations.push(
      'An acidic species donates protons (H⁺) to a basic species, neutralizing each other to produce water (H₂O) and an ionic salt.'
    );
  }

  // 5. Single Replacement (A + BC -> B + AC)
  if (numR === 2 && numP === 2) {
    const reactantElements = reactants.filter(isElement);
    const productElements = products.filter(isElement);

    if (reactantElements.length === 1 && productElements.length === 1) {
      types.push('Single Replacement (Displacement)');
      const incoming = reactantElements[0].cleanFormula;
      const displaced = productElements[0].cleanFormula;
      explanations.push(
        `A more reactive free element (${incoming}) displaces a less reactive element (${displaced}) from its compound based on the electrochemical activity series.`
      );
    }
  }

  // 6. Double Replacement / Precipitation / Metathesis (AB + CD -> AD + CB)
  if (numR === 2 && numP === 2) {
    const rAllCompounds = reactants.every((r) => !isElement(r));
    const pAllCompounds = products.every((p) => !isElement(p));

    if (rAllCompounds && pAllCompounds && !types.includes('Acid-Base Neutralization')) {
      types.push('Double Replacement (Metathesis)');
      explanations.push(
        'The positive and negative ions of two reacting compounds exchange partners to create two new compounds, often driving precipitation or gas formation.'
      );
    }
  }

  // 7. Redox (Oxidation-Reduction)
  // Characteristic indicators: presence of free elements transitioning to compounds or vice-versa, or combustion
  const hasFreeElements = reactants.some(isElement) || products.some(isElement);
  const isCombustion = types.includes('Combustion');
  const isSingleReplacement = types.includes('Single Replacement (Displacement)');

  if (hasFreeElements || isCombustion || isSingleReplacement || reactants.some(r => r.charge !== 0)) {
    if (!types.includes('Oxidation-Reduction (Redox)')) {
      types.push('Oxidation-Reduction (Redox)');
      explanations.push(
        'Involves the transfer of electrons between chemical species, causing changes in oxidation states.'
      );
    }
  }

  // Default fallback if no specific pattern matched
  if (types.length === 0) {
    types.push('Complex Chemical Reaction');
    explanations.push(
      'A multi-step or non-elementary chemical transformation involving chemical bond reorganization.'
    );
  }

  return {
    primaryType: types[0],
    allTypes: types,
    description: types.join(' • '),
    explanation: explanations.join(' ')
  };
}

