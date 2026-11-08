// Exact rational number arithmetic for precise Gaussian elimination

export class Fraction {
  n: bigint; // Numerator
  d: bigint; // Denominator (always > 0)

  constructor(numerator: bigint | number, denominator: bigint | number = 1n) {
    let num = typeof numerator === 'number' ? BigInt(Math.round(numerator)) : numerator;
    let den = typeof denominator === 'number' ? BigInt(Math.round(denominator)) : denominator;

    if (den === 0n) {
      throw new Error('Denominator cannot be zero.');
    }

    if (den < 0n) {
      num = -num;
      den = -den;
    }

    const g = Fraction.gcd(Fraction.absBigInt(num), den);
    this.n = num / g;
    this.d = den / g;
  }

  static gcd(a: bigint, b: bigint): bigint {
    while (b !== 0n) {
      const t = b;
      b = a % b;
      a = t;
    }
    return a;
  }

  static lcm(a: bigint, b: bigint): bigint {
    if (a === 0n || b === 0n) return 0n;
    return (Fraction.absBigInt(a) / Fraction.gcd(a, b)) * Fraction.absBigInt(b);
  }

  static absBigInt(a: bigint): bigint {
    return a < 0n ? -a : a;
  }

  static zero(): Fraction {
    return new Fraction(0n, 1n);
  }

  static one(): Fraction {
    return new Fraction(1n, 1n);
  }

  isZero(): boolean {
    return this.n === 0n;
  }

  isNegative(): boolean {
    return this.n < 0n;
  }

  add(other: Fraction): Fraction {
    return new Fraction(this.n * other.d + other.n * this.d, this.d * other.d);
  }

  sub(other: Fraction): Fraction {
    return new Fraction(this.n * other.d - other.n * this.d, this.d * other.d);
  }

  mul(other: Fraction): Fraction {
    return new Fraction(this.n * other.n, this.d * other.d);
  }

  div(other: Fraction): Fraction {
    if (other.n === 0n) throw new Error('Division by zero');
    return new Fraction(this.n * other.d, this.d * other.n);
  }

  neg(): Fraction {
    return new Fraction(-this.n, this.d);
  }

  abs(): Fraction {
    return new Fraction(Fraction.absBigInt(this.n), this.d);
  }

  equals(other: Fraction): boolean {
    return this.n === other.n && this.d === other.d;
  }

  toNumber(): number {
    return Number(this.n) / Number(this.d);
  }

  toString(): string {
    if (this.d === 1n) return this.n.toString();
    return `${this.n}/${this.d}`;
  }
}

