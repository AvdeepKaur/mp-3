import { useState } from "react";

export default function useCalculator() {
  const [first, setFirst] = useState<string>("");
  const [second, setSecond] = useState<string>("");
  const [result, setResult] = useState<number | string | null>(null);

  const parse = (value: string): number => parseFloat(value);

  const displayResult = (value: number | string) => {
    if (isNaN(Number(value))) {
      setResult("Error: Invalid input");
    } else if (!isFinite(Number(value))) {
      setResult("Error: Division by zero");
    } else {
      setResult(value);
    }
  };

  const clear = () => {
    setFirst("");
    setSecond("");
    setResult(null);
  };

  const add = () => {
    const f = parse(first);
    const s = parse(second);
    displayResult(f + s);
  };

  const subtract = () => {
    const f = parse(first);
    const s = parse(second);
    displayResult(f - s);
  };

  const multiply = () => {
    const f = parse(first);
    const s = parse(second);
    displayResult(f * s);
  };

  const divide = () => {
    const f = parse(first);
    const s = parse(second);

    if (s === 0) {
      displayResult(Infinity); // caught by displayResult
    } else {
      displayResult(f / s);
    }
  };

  const power = () => {
    const base = parse(first);
    const exponentRaw = parse(second);

    if (isNaN(base) || isNaN(exponentRaw)) {
      displayResult(NaN);
      return;
    }

    // Handle edge cases manually
    if (exponentRaw === 0) {
      displayResult(1);
      return;
    }

    if (base === 0) {
      displayResult(0);
      return;
    }

    const exponent = Math.round(exponentRaw);

    let result = 1;
    for (let i = 0; i < Math.abs(exponent); i++) {
      result *= base;
    }

    if (exponent < 0) {
      displayResult(1 / result);
    } else {
      displayResult(result);
    }
  };

  return {
    first,
    setFirst,
    second,
    setSecond,
    result,
    clear,
    add,
    subtract,
    multiply,
    divide,
    power,
  };
}
