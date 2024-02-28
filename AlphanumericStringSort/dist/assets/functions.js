"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sortString = exports.sortNumbers = exports.sortByCase = exports.sortLetters = exports.isNumber = exports.isLetter = exports.separateCharacters = void 0;
function separateCharacters(input) {
    const result = {
        letters: [],
        numbers: [],
        specialCharacters: []
    };
    for (const char of input) {
        if (isLetter(char)) {
            result.letters.push(char);
        }
        else if (isNumber(char)) {
            result.numbers.push(char);
        }
        else {
            result.specialCharacters.push(char);
        }
    }
    return result;
}
exports.separateCharacters = separateCharacters;
function isLetter(char) {
    return /[a-zA-Z]/.test(char);
}
exports.isLetter = isLetter;
function isNumber(char) {
    return /[0-9]/.test(char);
}
exports.isNumber = isNumber;
function sortLetters(letters) {
    const sortedLetters = letters.sort();
    return sortByCase(sortedLetters);
}
exports.sortLetters = sortLetters;
function sortByCase(letters) {
    let splitIndex = letters.findIndex(char => /[a-z]/.test(char));
    if (splitIndex === -1) {
        splitIndex = letters.length; // If no lowercase letter found, split at the end
    }
    const firstPart = letters.slice(0, splitIndex);
    const secondPart = letters.slice(splitIndex);
    return secondPart.concat(firstPart);
}
exports.sortByCase = sortByCase;
function sortNumbers(numbers) {
    return numbers.sort((a, b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        if (numA % 2 !== numB % 2) {
            return numA % 2 - numB % 2;
        }
        return numA - numB;
    });
}
exports.sortNumbers = sortNumbers;
function sortString(input) {
    if (input.length === 0)
        return "";
    const { letters, numbers, specialCharacters } = separateCharacters(input);
    const sortedLetters = sortLetters(letters);
    const sortedNumbers = sortNumbers(numbers);
    return sortedLetters.join('') + sortedNumbers.join('') + specialCharacters.join('');
}
exports.sortString = sortString;
//# sourceMappingURL=functions.js.map