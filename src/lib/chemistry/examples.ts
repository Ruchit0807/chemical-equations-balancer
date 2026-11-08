export interface ReactionExample {
  id: string;
  name: string;
  unbalanced: string;
  category: string;
  description: string;
  difficulty: 'Elementary' | 'Intermediate' | 'Advanced';
}

export const REACTION_CATEGORIES = [
  'All',
  'Combustion',
  'Synthesis',
  'Decomposition',
  'Acid-Base',
  'Single Replacement',
  'Double Replacement',
  'Industrial & Biology'
];

export const POPULAR_REACTIONS: ReactionExample[] = [
  {
    id: 'photosynthesis',
    name: 'Photosynthesis',
    unbalanced: 'CO2 + H2O -> C6H12O6 + O2',
    category: 'Industrial & Biology',
    description: 'Plants convert atmospheric carbon dioxide and water into glucose and oxygen using sunlight.',
    difficulty: 'Intermediate'
  },
  {
    id: 'cellular-respiration',
    name: 'Cellular Respiration',
    unbalanced: 'C6H12O6 + O2 -> CO2 + H2O',
    category: 'Industrial & Biology',
    description: 'Living cells oxidize glucose to release adenosine triphosphate (ATP) metabolic energy.',
    difficulty: 'Intermediate'
  },
  {
    id: 'combustion-methane',
    name: 'Combustion of Natural Gas (Methane)',
    unbalanced: 'CH4 + O2 -> CO2 + H2O',
    category: 'Combustion',
    description: 'The clean burning of methane gas in oxygen, generating blue flame and thermal energy.',
    difficulty: 'Elementary'
  },
  {
    id: 'combustion-propane',
    name: 'Combustion of Propane',
    unbalanced: 'C3H8 + O2 -> CO2 + H2O',
    category: 'Combustion',
    description: 'High-energy combustion of propane fuel commonly utilized in heating and gas grills.',
    difficulty: 'Intermediate'
  },
  {
    id: 'combustion-octane',
    name: 'Combustion of Gasoline (Octane)',
    unbalanced: 'C8H18 + O2 -> CO2 + H2O',
    category: 'Combustion',
    description: 'The internal combustion of octane in automobile engines yielding carbon dioxide and water.',
    difficulty: 'Advanced'
  },
  {
    id: 'water-synthesis',
    name: 'Formation of Water',
    unbalanced: 'H2 + O2 -> H2O',
    category: 'Synthesis',
    description: 'Highly exothermic synthesis of liquid water from elemental hydrogen and oxygen gases.',
    difficulty: 'Elementary'
  },
  {
    id: 'haber-process',
    name: 'Haber-Bosch Ammonia Synthesis',
    unbalanced: 'N2 + H2 -> NH3',
    category: 'Synthesis',
    description: 'Industrial nitrogen fixation producing synthetic ammonia for global agricultural fertilizers.',
    difficulty: 'Elementary'
  },
  {
    id: 'iron-rusting',
    name: 'Rusting of Iron (Oxidation)',
    unbalanced: 'Fe + O2 -> Fe2O3',
    category: 'Synthesis',
    description: 'Oxidation of elemental iron to iron(III) oxide rust in the presence of oxygen.',
    difficulty: 'Intermediate'
  },
  {
    id: 'hydrogen-peroxide-decomp',
    name: 'Decomposition of Hydrogen Peroxide',
    unbalanced: 'H2O2 -> H2O + O2',
    category: 'Decomposition',
    description: 'Catalytic breakdown of hydrogen peroxide into water and oxygen gas ("Elephant Toothpaste").',
    difficulty: 'Elementary'
  },
  {
    id: 'calcium-carbonate-calcination',
    name: 'Thermal Decomposition of Limestone',
    unbalanced: 'CaCO3 -> CaO + CO2',
    category: 'Decomposition',
    description: 'Calcination of limestone (calcium carbonate) into quicklime (calcium oxide) in kiln furnaces.',
    difficulty: 'Elementary'
  },
  {
    id: 'potassium-chlorate-decomp',
    name: 'Decomposition of Potassium Chlorate',
    unbalanced: 'KClO3 -> KCl + O2',
    category: 'Decomposition',
    description: 'Laboratory thermal decomposition yielding pure oxygen gas and potassium chloride.',
    difficulty: 'Intermediate'
  },
  {
    id: 'neutralization-hcl-naoh',
    name: 'Hydrochloric Acid & Sodium Hydroxide',
    unbalanced: 'HCl + NaOH -> NaCl + H2O',
    category: 'Acid-Base',
    description: 'Classic strong acid-strong base neutralization producing neutral table salt and water.',
    difficulty: 'Elementary'
  },
  {
    id: 'baking-soda-vinegar',
    name: 'Baking Soda & Acetic Acid',
    unbalanced: 'NaHCO3 + CH3COOH -> NaC2H3O2 + H2O + CO2',
    category: 'Acid-Base',
    description: 'Popular kitchen volcano reaction producing sodium acetate, water, and effervescent carbon dioxide.',
    difficulty: 'Intermediate'
  },
  {
    id: 'sulfuric-acid-aluminum-hydroxide',
    name: 'Sulfuric Acid & Aluminium Hydroxide',
    unbalanced: 'Al(OH)3 + H2SO4 -> Al2(SO4)3 + H2O',
    category: 'Acid-Base',
    description: 'Polyprotic acid neutralization producing aluminium sulfate coagulant.',
    difficulty: 'Advanced'
  },
  {
    id: 'thermite-reaction',
    name: 'Thermite Reaction',
    unbalanced: 'Al + Fe2O3 -> Al2O3 + Fe',
    category: 'Single Replacement',
    description: 'Violently exothermic single displacement producing molten iron used in railway welding.',
    difficulty: 'Intermediate'
  },
  {
    id: 'zinc-acid-hydrogen',
    name: 'Zinc & Hydrochloric Acid',
    unbalanced: 'Zn + HCl -> ZnCl2 + H2',
    category: 'Single Replacement',
    description: 'Standard lab preparation of hydrogen gas via metal displacement of hydrogen ions.',
    difficulty: 'Elementary'
  },
  {
    id: 'copper-silver-displacement',
    name: 'Copper in Silver Nitrate',
    unbalanced: 'Cu + AgNO3 -> Cu(NO3)2 + Ag',
    category: 'Single Replacement',
    description: 'Spontaneous displacement producing shimmering crystalline silver needles on copper wire.',
    difficulty: 'Intermediate'
  },
  {
    id: 'silver-chloride-precipitation',
    name: 'Precipitation of Silver Chloride',
    unbalanced: 'AgNO3 + NaCl -> AgCl + NaNO3',
    category: 'Double Replacement',
    description: 'Instant formation of insoluble white curdy precipitate of silver chloride.',
    difficulty: 'Elementary'
  },
  {
    id: 'barium-sulfate-precipitation',
    name: 'Precipitation of Barium Sulfate',
    unbalanced: 'BaCl2 + Na2SO4 -> BaSO4 + NaCl',
    category: 'Double Replacement',
    description: 'Diagnostic gravimetric precipitation forming dense white insoluble barium sulfate.',
    difficulty: 'Intermediate'
  },
  {
    id: 'lead-nitrate-potassium-iodide',
    name: 'Golden Rain (Lead Iodide)',
    unbalanced: 'Pb(NO3)2 + KI -> PbI2 + KNO3',
    category: 'Double Replacement',
    description: 'Double displacement forming brilliant golden-yellow crystalline lead(II) iodide precipitate.',
    difficulty: 'Intermediate'
  },
  {
    id: 'potassium-permanganate-redox',
    name: 'Permanganate Redox Oxidation',
    unbalanced: 'KMnO4 + HCl -> KCl + MnCl2 + Cl2 + H2O',
    category: 'Industrial & Biology',
    description: 'Strong redox reaction used for commercial chlorine gas synthesis in acidic medium.',
    difficulty: 'Advanced'
  }
];

