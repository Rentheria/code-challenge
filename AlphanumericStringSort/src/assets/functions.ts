import { SortedArrays } from "./interfaces/sortedArrays";

export function separateCharacters(input: string): SortedArrays {
    const result: SortedArrays = {
        letters: [],
        numbers: [],
        specialCharacters: []
    };
    
    for (const char of input) {
        if (isLetter(char)) {
            result.letters.push(char);
        } else if (isNumber(char)) {
            result.numbers.push(char);
        } else {
            result.specialCharacters.push(char);
        }
    }

    return result;
}

export function isLetter(char: string): boolean {
    return /[a-zA-Z]/.test(char);
}

export function isNumber(char: string): boolean {
    return /[0-9]/.test(char);
}

export function sortLetters(letters: string[]): string[] {
    const sortedLetters =  letters.sort();
    return sortByCase(sortedLetters);
}

export function sortByCase(letters: any): string[] {
    let splitIndex = letters.findIndex(char => /[a-z]/.test(char));
    if (splitIndex === -1) {
        splitIndex = letters.length; // If no lowercase letter found, split at the end
    }
    const firstPart = letters.slice(0, splitIndex);
    const secondPart = letters.slice(splitIndex);

    return secondPart.concat(firstPart);
}

export function sortNumbers(numbers: string[]): string[] {
    return numbers.sort((a, b) => {
        const numA = parseInt(a);
        const numB = parseInt(b);
        if (numA % 2 !== numB % 2) {
            return numA % 2 - numB % 2;
        }
        return numA - numB;
    });
}

export function sortString(input: string): string {
    if (input.length === 0) return "";

    const { letters, numbers, specialCharacters } = separateCharacters(input);
    const sortedLetters = sortLetters(letters);
    const sortedNumbers = sortNumbers(numbers);

    return sortedLetters.join('') + sortedNumbers.join('') + specialCharacters.join('');
}