import { getElement, isValidElement } from './elements';

export interface ParsedCompound {
  raw: string;
  cleanFormula: string;
  elementCounts: Record<string, number>;
  charge: number;
  phase?: string;
  molarMass: number;
  userCoefficient?: number;
}

export interface ParsedEquation {
  reactants: ParsedCompound[];
  products: ParsedCompound[];
  allElements: string[];
  hasCharge: boolean;
  error?: string;
}

// Convert unicode subscripts and superscripts to standard ASCII
export function normalizeChemicalString(input: string): string {
  const subscriptMap: Record<string, string> = {
    '₀': '0', '₁': '1', '₂': '2', '₃': '3', '₄': '4',
    '₅': '5', '₆': '6', '₇': '7', '₈': '8', '₉': '9'
  };
  const superscriptMap: Record<string, string> = {
    '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
    '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
    '⁺': '+', '⁻': '-'
  };

  let str = input.trim();
  str = str.replace(/[₀-₉]/g, (ch) => subscriptMap[ch] || ch);
  str = str.replace(/[⁰-⁹⁺⁻]/g, (ch) => superscriptMap[ch] || ch);
  // Normalize hydrate dots: middot (·) or asterisk (*) or middle dot (•)
  str = str.replace(/[·•]/g, '*');
  return str;
}

// Format a chemical formula with HTML subscripts/superscripts for elegant display
export function formatFormulaToHtml(formula: string, charge = 0): string {
  // Convert *5H2O to · 5H2O
  let formatted = formula.replace(/\*(\d*)([A-Z])/g, (_, count, el) => ` · ${count || ''}${el}`);

  // Replace numbers with <sub> except if they are part of a charge at the end
  // First extract charge if present
  let chargeStr = '';
  if (charge !== 0) {
    if (charge === 1) chargeStr = '<sup>+</sup>';
    else if (charge === -1) chargeStr = '<sup>−</sup>';
    else if (charge > 1) chargeStr = `<sup>${charge}+</sup>`;
    else if (charge < -1) chargeStr = `<sup>${Math.abs(charge)}−</sup>`;
  }

  // Handle standard chemical numbers inside formula -> <sub>
  // Matches digits that follow an element symbol or closing parenthesis
  formatted = formatted.replace(/([A-Za-z\)\]])(\d+)/g, '$1<sub>$2</sub>');

  return formatted + chargeStr;
}

// Parse a single chemical formula string into element counts, charge, and mass
export function parseCompound(rawToken: string): ParsedCompound {
  let str = normalizeChemicalString(rawToken);
  
  // Extract leading coefficient if user typed one (e.g. "2 H2O" or "3Fe")
  let userCoefficient: number | undefined;
  const leadMatch = str.match(/^(\d+)\s*(.*)$/);
  if (leadMatch && leadMatch[2].length > 0) {
    userCoefficient = parseInt(leadMatch[1], 10);
    str = leadMatch[2];
  }

  // Extract phase if present at end, e.g. (aq), (s), (l), (g)
  let phase: string | undefined;
  const phaseMatch = str.match(/\((aq|s|l|g)\)$/i);
  if (phaseMatch) {
    phase = phaseMatch[1].toLowerCase();
    str = str.substring(0, str.length - phaseMatch[0].length).trim();
  }

  // Extract charge if present, e.g. ^2+, ^-, 2+, 3-, +, -, etc.
  let charge = 0;
  // Case 1: ^2+, ^-, ^3+
  const caretChargeMatch = str.match(/\^([0-9]*[\+\-]|\+[\d]*|\-[\d]*)$/);
  if (caretChargeMatch) {
    charge = parseChargeString(caretChargeMatch[1]);
    str = str.substring(0, str.length - caretChargeMatch[0].length).trim();
  } else {
    // Case 2: trailing +, -, 2+, 2-, etc. at end of formula (after elements or brackets)
    const trailingChargeMatch = str.match(/([0-9]*[\+\-]|[\+\-][0-9]*)$/);
    if (trailingChargeMatch && trailingChargeMatch[0].length > 0 && str.length > trailingChargeMatch[0].length) {
      charge = parseChargeString(trailingChargeMatch[0]);
      str = str.substring(0, str.length - trailingChargeMatch[0].length).trim();
    }
  }

  // Handle hydrates like CuSO4*5H2O or FeSO4*7H2O
  const parts = str.split('*');
  const mainPart = parts[0];
  const hydratePart = parts.slice(1).join('*');

  const elementCounts: Record<string, number> = {};

  parseFormulaBlock(mainPart, 1, elementCounts);

  if (hydratePart) {
    // Hydrate part usually starts with an optional coefficient like 5H2O
    const hMatch = hydratePart.match(/^(\d*)(.*)$/);
    const hydrateMultiplier = hMatch && hMatch[1] ? parseInt(hMatch[1], 10) : 1;
    const hydrateFormula = hMatch && hMatch[2] ? hMatch[2] : hydratePart;
    parseFormulaBlock(hydrateFormula, hydrateMultiplier, elementCounts);
  }

  // Calculate molar mass
  let molarMass = 0;
  for (const [elem, count] of Object.entries(elementCounts)) {
    const el = getElement(elem);
    if (!el) {
      throw new Error(`Unknown chemical element: "${elem}" in compound "${rawToken}"`);
    }
    molarMass += el.mass * count;
  }

  return {
    raw: rawToken,
    cleanFormula: str,
    elementCounts,
    charge,
    phase,
    molarMass,
    userCoefficient
  };
}

function parseChargeString(chargeStr: string): number {
  if (chargeStr === '+' || chargeStr === '+1') return 1;
  if (chargeStr === '-' || chargeStr === '-1') return -1;
  
  if (chargeStr.endsWith('+')) {
    const num = chargeStr.slice(0, -1);
    return num ? parseInt(num, 10) : 1;
  }
  if (chargeStr.endsWith('-')) {
    const num = chargeStr.slice(0, -1);
    return -(num ? parseInt(num, 10) : 1);
  }
  if (chargeStr.startsWith('+')) {
    const num = chargeStr.slice(1);
    return num ? parseInt(num, 10) : 1;
  }
  if (chargeStr.startsWith('-')) {
    const num = chargeStr.slice(1);
    return -(num ? parseInt(num, 10) : 1);
  }
  return 0;
}

// Parses groups with parentheses, brackets, and element counts
function parseFormulaBlock(formula: string, outerMultiplier: number, target: Record<string, number>): void {
  // Normalize brackets to parentheses
  const s = formula.replace(/\[/g, '(').replace(/\]/g, ')');
  let i = 0;
  const n = s.length;

  function parseGroup(): Record<string, number> {
    const groupCounts: Record<string, number> = {};

    while (i < n) {
      const char = s[i];

      if (char === '(') {
        i++; // skip '('
        const subGroup = parseGroup();
        // Expect ')'
        if (i < n && s[i] === ')') {
          i++; // skip ')'
        }
        // Check for trailing number
        let count = 1;
        const numStart = i;
        while (i < n && /\d/.test(s[i])) {
          i++;
        }
        if (i > numStart) {
          count = parseInt(s.substring(numStart, i), 10);
        }

        // Multiply subGroup by count
        for (const [elem, subCount] of Object.entries(subGroup)) {
          groupCounts[elem] = (groupCounts[elem] || 0) + subCount * count;
        }
      } else if (char === ')') {
        // Return from group; caller handles ')'
        break;
      } else if (/[A-Z]/.test(char)) {
        // Element symbol starts with an uppercase letter
        let elem = char;
        i++;
        if (i < n && /[a-z]/.test(s[i])) {
          elem += s[i];
          i++;
        }

        if (!isValidElement(elem)) {
          throw new Error(`Unrecognized element "${elem}" in formula "${formula}"`);
        }

        // Check for trailing number
        let count = 1;
        const numStart = i;
        while (i < n && /\d/.test(s[i])) {
          i++;
        }
        if (i > numStart) {
          count = parseInt(s.substring(numStart, i), 10);
        }

        groupCounts[elem] = (groupCounts[elem] || 0) + count;
      } else if (char === ' ') {
        i++; // ignore spaces
      } else {
        throw new Error(`Unexpected character "${char}" in chemical formula "${formula}"`);
      }
    }

    return groupCounts;
  }

  const result = parseGroup();
  for (const [elem, count] of Object.entries(result)) {
    target[elem] = (target[elem] || 0) + count * outerMultiplier;
  }
}

// Parse entire equation string e.g. "H2 + O2 -> H2O"
export function parseEquation(equationStr: string): ParsedEquation {
  const normalized = normalizeChemicalString(equationStr);

  // Split on arrow or equal sign
  const splitRegex = /(?:->|-->|=>|==>|→|⇌|⇄|<=>|=)/;
  const sides = normalized.split(splitRegex);

  if (sides.length !== 2) {
    return {
      reactants: [],
      products: [],
      allElements: [],
      hasCharge: false,
      error: 'Equation must contain an arrow (->) or equals sign (=) separating reactants and products.'
    };
  }

  const lhsTokens = sides[0].split('+').map((s) => s.trim()).filter(Boolean);
  const rhsTokens = sides[1].split('+').map((s) => s.trim()).filter(Boolean);

  if (lhsTokens.length === 0 || rhsTokens.length === 0) {
    return {
      reactants: [],
      products: [],
      allElements: [],
      hasCharge: false,
      error: 'Both sides of the equation must contain at least one chemical species.'
    };
  }

  try {
    const reactants = lhsTokens.map(parseCompound);
    const products = rhsTokens.map(parseCompound);

    const elementsSet = new Set<string>();
    let hasCharge = false;

    for (const r of reactants) {
      for (const el of Object.keys(r.elementCounts)) elementsSet.add(el);
      if (r.charge !== 0) hasCharge = true;
    }
    for (const p of products) {
      for (const el of Object.keys(p.elementCounts)) elementsSet.add(el);
      if (p.charge !== 0) hasCharge = true;
    }

    // Verify all reactant elements appear in products and vice versa
    const reactantElements = new Set<string>();
    const productElements = new Set<string>();
    for (const r of reactants) for (const el of Object.keys(r.elementCounts)) reactantElements.add(el);
    for (const p of products) for (const el of Object.keys(p.elementCounts)) productElements.add(el);

    for (const el of reactantElements) {
      if (!productElements.has(el)) {
        return {
          reactants,
          products,
          allElements: Array.from(elementsSet),
          hasCharge,
          error: `Element "${el}" appears on the reactant side but not on the product side.`
        };
      }
    }

    for (const el of productElements) {
      if (!reactantElements.has(el)) {
        return {
          reactants,
          products,
          allElements: Array.from(elementsSet),
          hasCharge,
          error: `Element "${el}" appears on the product side but not on the reactant side.`
        };
      }
    }

    return {
      reactants,
      products,
      allElements: Array.from(elementsSet),
      hasCharge
    };
  } catch (err: any) {
    return {
      reactants: [],
      products: [],
      allElements: [],
      hasCharge: false,
      error: err.message || 'Failed to parse chemical equation.'
    };
  }
}

