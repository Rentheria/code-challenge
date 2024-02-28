"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./assets/functions");
describe('separateCharacters', () => {
    it('should separate characters into letters, numbers, and special characters', () => {
        const input = 'aB3c9!2x@C%$%SFSDdsf';
        const result = (0, functions_1.separateCharacters)(input);
        expect(result.letters).toEqual([
            'a', 'B', 'c', 'x',
            'C', 'S', 'F', 'S',
            'D', 'd', 's', 'f'
        ]);
        expect(result.numbers).toEqual(['3', '9', '2']);
        expect(result.specialCharacters).toEqual(['!', '@', '%', '$', '%']);
    });
});
describe('sortLetters', () => {
    it('should sort letters by case and return lowercase letters first', () => {
        const input = ['E', 'G', 'S', 'S', 'a', 'd', 'e', 'f', 'f', 'f', 'j', 'j', 'l', 'l', 'l'];
        const result = (0, functions_1.sortLetters)(input);
        expect(result).toEqual(['a', 'd', 'e', 'f', 'f', 'f', 'j', 'j', 'l', 'l', 'l', 'E', 'G', 'S', 'S']);
    });
});
describe('sortNumbers', () => {
    it('should sort numbers placing odd numbers before even numbers', () => {
        const input = ['3', '9', '2'];
        const result = (0, functions_1.sortNumbers)(input);
        expect(result).toEqual(['2', '3', '9']);
    });
});
describe('sortString', () => {
    it('should sort the input string according to the given criteria', () => {
        const input = 'aB3c9!2x@C%$%SFSDdsf';
        const result = (0, functions_1.sortString)(input);
        expect(result).toEqual('acdfsxBCDFSS239!@%$%');
    });
});
describe('sortString', () => {
    it('should sort an empty input string according to the given criteria', () => {
        const input = '';
        const result = (0, functions_1.sortString)(input);
        expect(result).toEqual('');
    });
});
//# sourceMappingURL=app.test.js.map