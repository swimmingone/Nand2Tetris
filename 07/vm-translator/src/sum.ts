import { sum as _sum } from 'lodash-es';

export function sum(a: number, b: number): number {
  return _sum([a, b]);
}
