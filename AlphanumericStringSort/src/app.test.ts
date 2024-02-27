import { 
  separateCharacters,
  sortLetters,
  sortNumbers,
  sortString
} from './assets/functions'

describe('separateCharacters', () => {
    it('should separate characters into letters, numbers, and special characters', () => {
      const input = 'aB3c9!2x@C%$%SFSDdsf';
      const result = separateCharacters(input);
      expect(result.letters).toEqual([
        'a', 'B', 'c', 'x',
        'C', 'S', 'F', 'S',
        'D', 'd', 's', 'f'
      ]);
      expect(result.numbers).toEqual([ '3', '9', '2' ]);
      expect(result.specialCharacters).toEqual(['!', '@', '%', '$', '%']);
    });
});

describe('sortLetters', () => {
  it('should sort letters by case and return lowercase letters first', () => {
    const input = ['E', 'G', 'S', 'S', 'a', 'd', 'e', 'f', 'f', 'f', 'j', 'j', 'l', 'l', 'l'];
    const result = sortLetters(input);
    expect(result).toEqual(['a', 'd', 'e', 'f', 'f', 'f', 'j', 'j', 'l', 'l', 'l', 'E', 'G', 'S', 'S']);
  });
});

describe('sortNumbers', () => {
  it('should sort numbers placing odd numbers before even numbers', () => {
    const input = [ '3', '9', '2' ];
    const result = sortNumbers(input);
    expect(result).toEqual(['2', '3', '9']);
  });
});

describe('sortString', () => {
  it('should sort the input string according to the given criteria', () => {
    const input = 'aB3c9!2x@C%$%SFSDdsf';
    const result = sortString(input);
    expect(result).toEqual('acdfsxBCDFSS239!@%$%');
  });
});
