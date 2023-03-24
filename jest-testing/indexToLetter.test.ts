import { indexToLetter } from './indexToLetter';

describe('indexToLetter', () => {
  it('returns the alphabetical equivalent of a number', () => {
    expect(indexToLetter(0)).toBe('A');
    expect(indexToLetter(2)).toBe('C');
    expect(indexToLetter(5)).toBe('F');
  });

  it('returns undefined if given an index that is out of range', () => {
    expect(indexToLetter(-1)).toBeUndefined();
    expect(indexToLetter(26)).toBeUndefined();
  });
});
