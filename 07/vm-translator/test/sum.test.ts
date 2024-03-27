import { sum } from '../src/sum';
import { describe, expect, it } from 'vitest';

describe('sum', () => {
  it('should return sum of two numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });

  it('should return sum of two negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3);
  });
});
