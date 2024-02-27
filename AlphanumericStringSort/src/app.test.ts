import { separateCharacters } from './assets/functions'

describe('separateCharacters', () => {
    it('should separate characters into letters, numbers, and special characters', () => {
      const input = 'aB3c9!2x@C%$%SFSDdsf';
      const result = separateCharacters(input);
      expect(result.letters).toEqual(['a', 'B', 'c', 'x', 'S', 'F', 'S', 'D', 'd', 's', 'f']);
      expect(result.numbers).toEqual(['3', '9', '2']);
      expect(result.specialCharacters).toEqual(['!', '@', '%', '$', '%']);
    });
  });
