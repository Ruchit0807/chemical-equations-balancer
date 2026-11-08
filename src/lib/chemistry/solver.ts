import { Fraction } from './fraction';
import { parseEquation, type ParsedCompound, formatFormulaToHtml } from './parser';

export interface BalancingStep {
  title: string;
  description: string;
  math?: string;
}

export interface BalancedResult {
  success: boolean;
  error?: string;
  reactants: {
    compound: ParsedCompound;
    coefficient: number;
    htmlFormula: string;
  }[];
  products: {
    compound: ParsedCompound;
    coefficient: number;
    htmlFormula: string;
  }[];
  balancedEquationString: string;
  balancedEquationHtml: string;
  balancedEquationLatex: string;
  steps: BalancingStep[];
  allElements: string[];
}

export function balanceEquation(equationStr: string): BalancedResult {
  const parsed = parseEquation(equationStr);

  if (parsed.error) {
    return {
      success: false,
      error: parsed.error,
      reactants: [],
      products: [],
      balancedEquationString: '',
      balancedEquationHtml: '',
      balancedEquationLatex: '',
      steps: [],
      allElements: []
    };
  }

  const { reactants, products, allElements, hasCharge } = parsed;
  const numReactants = reactants.length;
  const numProducts = products.length;
  const numCompounds = numReactants + numProducts;

  // Variable names: a, b, c, d, e, f, ...
  const varNames = 'abcdefghijklmnopqrstuvwxyz'.split('');

  const steps: BalancingStep[] = [];

  // Step 1: Assign algebraic variables
  const assignedReaction = [
    ...reactants.map((r, i) => `${varNames[i] || `c_{${i+1}}`}${r.cleanFormula}`),
  ].join(' + ') + ' → ' + [
    ...products.map((p, i) => `${varNames[numReactants + i] || `c_{${numReactants + i + 1}}`}${p.cleanFormula}`)
  ].join(' + ');

  steps.push({
    title: '1. Assign Algebraic Coefficients',
    description: 'Assign a stoichiometric variable to each reactant and product:',
    math: assignedReaction
  });

  // Build matrix A: rows = elements (+ 1 row if hasCharge), cols = numCompounds
  // Rows: each element
  const rowLabels: string[] = [...allElements];
  if (hasCharge) {
    rowLabels.push('Net Electrical Charge');
  }

  const numRows = rowLabels.length;
  const matrix: Fraction[][] = [];

  for (let r = 0; r < numRows; r++) {
    const row: Fraction[] = [];
    const isChargeRow = hasCharge && r === numRows - 1;
    const elem = isChargeRow ? null : allElements[r];

    // Reactants (+ sign)
    for (let c = 0; c < numReactants; c++) {
      const comp = reactants[c];
      const val = isChargeRow ? comp.charge : (comp.elementCounts[elem!] || 0);
      row.push(new Fraction(BigInt(val), 1n));
    }

    // Products (- sign)
    for (let c = 0; c < numProducts; c++) {
      const comp = products[c];
      const val = isChargeRow ? comp.charge : (comp.elementCounts[elem!] || 0);
      row.push(new Fraction(BigInt(-val), 1n));
    }

    matrix.push(row);
  }

  // Step 2: Formulate conservation equations
  const eqStrings: string[] = [];
  for (let r = 0; r < numRows; r++) {
    const isChargeRow = hasCharge && r === numRows - 1;
    const label = isChargeRow ? 'Net Charge' : allElements[r];
    const lhsTerms: string[] = [];
    const rhsTerms: string[] = [];

    for (let c = 0; c < numReactants; c++) {
      const coeff = isChargeRow ? reactants[c].charge : (reactants[c].elementCounts[label] || 0);
      if (coeff !== 0) {
        lhsTerms.push(`${coeff === 1 ? '' : coeff}${varNames[c]}`);
      }
    }
    for (let c = 0; c < numProducts; c++) {
      const coeff = isChargeRow ? products[c].charge : (products[c].elementCounts[label] || 0);
      if (coeff !== 0) {
        rhsTerms.push(`${coeff === 1 ? '' : coeff}${varNames[numReactants + c]}`);
      }
    }

    eqStrings.push(`${label}: ${lhsTerms.join(' + ') || '0'} = ${rhsTerms.join(' + ') || '0'}`);
  }

  steps.push({
    title: '2. Create Conservation of Mass and Charge Equations',
    description: 'Set the number of atoms of each element on the left equal to the number on the right:',
    math: eqStrings.join('\n')
  });

  // Solve matrix via Gaussian elimination to RREF
  const rref = matrix.map((row) => row.map((cell) => new Fraction(cell.n, cell.d)));
  let lead = 0;

  for (let r = 0; r < numRows; r++) {
    if (lead >= numCompounds) break;
    let i = r;
    while (rref[i][lead].isZero()) {
      i++;
      if (i === numRows) {
        i = r;
        lead++;
        if (lead === numCompounds) break;
      }
    }
    if (lead >= numCompounds) break;

    // Swap rows i and r
    const temp = rref[i];
    rref[i] = rref[r];
    rref[r] = temp;

    // Divide row r by pivot
    const pivot = rref[r][lead];
    for (let c = 0; c < numCompounds; c++) {
      rref[r][c] = rref[r][c].div(pivot);
    }

    // Eliminate other rows
    for (let j = 0; j < numRows; j++) {
      if (j !== r) {
        const factor = rref[j][lead];
        if (!factor.isZero()) {
          for (let c = 0; c < numCompounds; c++) {
            rref[j][c] = rref[j][c].sub(factor.mul(rref[r][c]));
          }
        }
      }
    }
    lead++;
  }

  // Find pivot columns
  const pivotCols: number[] = [];
  for (let r = 0; r < numRows; r++) {
    for (let c = 0; c < numCompounds; c++) {
      if (!rref[r][c].isZero()) {
        pivotCols.push(c);
        break;
      }
    }
  }

  const freeCols = [];
  for (let c = 0; c < numCompounds; c++) {
    if (!pivotCols.includes(c)) freeCols.push(c);
  }

  if (freeCols.length === 0) {
    return {
      success: false,
      error: 'The equation has only the trivial zero solution. Ensure formulas are chemically valid.',
      reactants: [],
      products: [],
      balancedEquationString: '',
      balancedEquationHtml: '',
      balancedEquationLatex: '',
      steps: [],
      allElements
    };
  }

  // Standard chemical reaction balancing: typically exactly 1 free variable (nullspace dim = 1)
  // We set the free variable(s) to solve for positive rational coefficients
  // Use the last column as the primary parameter
  const solutionFractions: Fraction[] = new Array(numCompounds).fill(Fraction.zero());
  
  // Set the primary free variable (usually last column) to 1
  const freeCol = freeCols[freeCols.length - 1];
  solutionFractions[freeCol] = Fraction.one();

  for (let r = pivotCols.length - 1; r >= 0; r--) {
    const pCol = pivotCols[r];
    let sum = Fraction.zero();
    for (let c = pCol + 1; c < numCompounds; c++) {
      sum = sum.add(rref[r][c].mul(solutionFractions[c]));
    }
    solutionFractions[pCol] = sum.neg();
  }

  // Check if any solution coefficient is negative or zero
  const allPositive = solutionFractions.every((f) => !f.isZero() && !f.isNegative());
  const allNegative = solutionFractions.every((f) => !f.isZero() && f.isNegative());

  if (!allPositive && !allNegative) {
    // If mixed signs with 1 free variable, try testing other basis combinations or return specific error
    return {
      success: false,
      error: 'Cannot balance this reaction as a single forwards reaction. Check for typing mistakes or missing reaction partners.',
      reactants: [],
      products: [],
      balancedEquationString: '',
      balancedEquationHtml: '',
      balancedEquationLatex: '',
      steps: [],
      allElements
    };
  }

  // Normalize sign to positive
  if (allNegative) {
    for (let i = 0; i < solutionFractions.length; i++) {
      solutionFractions[i] = solutionFractions[i].neg();
    }
  }

  // Find LCM of all denominators to convert to integer coefficients
  let overallLcm = 1n;
  for (const f of solutionFractions) {
    overallLcm = Fraction.lcm(overallLcm, f.d);
  }

  let intCoefficients: bigint[] = solutionFractions.map((f) => (f.n * overallLcm) / f.d);

  // Divide by overall GCD of all coefficients
  let overallGcd = intCoefficients[0];
  for (let i = 1; i < intCoefficients.length; i++) {
    overallGcd = Fraction.gcd(overallGcd, intCoefficients[i]);
  }
  if (overallGcd > 1n) {
    intCoefficients = intCoefficients.map((c) => c / overallGcd);
  }

  const finalCoeffs = intCoefficients.map((c) => Number(c));

  // Build result
  const balancedReactants = reactants.map((r, i) => ({
    compound: r,
    coefficient: finalCoeffs[i],
    htmlFormula: formatFormulaToHtml(r.cleanFormula, r.charge)
  }));

  const balancedProducts = products.map((p, i) => ({
    compound: p,
    coefficient: finalCoeffs[numReactants + i],
    htmlFormula: formatFormulaToHtml(p.cleanFormula, p.charge)
  }));

  // Step 3: Minimal integer coefficients
  steps.push({
    title: '3. Determine Minimal Integer Coefficients',
    description: 'Solve the matrix system and multiply through by the common denominator to get lowest whole integers:',
    math: finalCoeffs.map((c, i) => `${varNames[i]} = ${c}`).join(', ')
  });

  // Format final equation strings
  const balancedEquationString = [
    ...balancedReactants.map((r) => `${r.coefficient === 1 ? '' : r.coefficient + ' '}${r.compound.cleanFormula}${r.compound.phase ? `(${r.compound.phase})` : ''}`),
  ].join(' + ') + ' → ' + [
    ...balancedProducts.map((p) => `${p.coefficient === 1 ? '' : p.coefficient + ' '}${p.compound.cleanFormula}${p.compound.phase ? `(${p.compound.phase})` : ''}`)
  ].join(' + ');

  const balancedEquationHtml = [
    ...balancedReactants.map((r) => `${r.coefficient === 1 ? '' : `<span class="coeff">${r.coefficient}</span> `}${r.htmlFormula}${r.compound.phase ? `<span class="phase">(${r.compound.phase})</span>` : ''}`),
  ].join(' + ') + ' → ' + [
    ...balancedProducts.map((p) => `${p.coefficient === 1 ? '' : `<span class="coeff">${p.coefficient}</span> `}${p.htmlFormula}${p.compound.phase ? `<span class="phase">(${p.compound.phase})</span>` : ''}`)
  ].join(' + ');

  const balancedEquationLatex = [
    ...balancedReactants.map((r) => `${r.coefficient === 1 ? '' : r.coefficient + ' '}\\text{${r.compound.cleanFormula}}`),
  ].join(' + ') + ' \\rightarrow ' + [
    ...balancedProducts.map((p) => `${p.coefficient === 1 ? '' : p.coefficient + ' '}\\text{${p.compound.cleanFormula}}`)
  ].join(' + ');

  return {
    success: true,
    reactants: balancedReactants,
    products: balancedProducts,
    balancedEquationString,
    balancedEquationHtml,
    balancedEquationLatex,
    steps,
    allElements
  };
}

