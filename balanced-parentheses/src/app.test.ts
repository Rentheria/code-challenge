import { 
    validateParentheses, 
    containsFirstOpeningParenthesis, 
    containsOpenParentheses, 
    compareParentheses, 
    countParentheses 
} from './assets/functions';
import { inputs } from './assets/text'

describe('validateParentheses function', () => {
    test('empty input returns false', () => {
        expect(validateParentheses('')).toBe(false);
    });

    test('input without opening parentheses returns false', () => {
        expect(validateParentheses('abc')).toBe(false);
    });

    test('input without closing parentheses returns false', () => {
        expect(validateParentheses('(abc')).toBe(false);
    });

    test('input with balanced parentheses returns true', () => {
        expect(validateParentheses('(abc)')).toBe(true);
    });

    test('input with unbalanced parentheses returns false', () => {
        expect(validateParentheses('(abc')).toBe(false);
    });

    test('input from inputs array returns correct result', () => {
        for (const input of inputs) {
            expect(validateParentheses(input)).toMatchSnapshot();
        }
    });
});

describe('containsFirstOpeningParenthesis function', () => {
    test('input with opening parenthesis at start returns true', () => {
        const input = '(abc)';
        expect(containsFirstOpeningParenthesis(input)).toBe(true);
    });

    test('input with opening parenthesis after other characters returns true', () => {
        const input = 'abc(def)';
        expect(containsFirstOpeningParenthesis(input)).toBe(true);
    });

    test('input without opening parenthesis returns false', () => {
        const input = 'abc)';
        expect(containsFirstOpeningParenthesis(input)).toBe(false);
    });

    test('input from inputs array returns correct result', () => {
        for (const input of inputs) {
            expect(containsFirstOpeningParenthesis(input)).toMatchSnapshot();
        }
    });
});

describe('containsOpenParentheses function', () => {
    test('input with opening parenthesis returns true', () => {
        const input = '(abc)';
        expect(containsOpenParentheses(input)).toBe(true);
    });

    test('input without opening parenthesis returns false', () => {
        const input = 'abc';
        expect(containsOpenParentheses(input)).toBe(false);
    });

    test('input from inputs array returns correct result', () => {
        for (const input of inputs) {
            expect(containsOpenParentheses(input)).toMatchSnapshot();
        }
    });
});

describe('compareParentheses function', () => {
    test('input with balanced parentheses returns true', () => {
        const input = '(abc)';
        expect(compareParentheses(input)).toBe(true);
    });

    test('input with unbalanced parentheses returns false', () => {
        const input = '(abc';
        expect(compareParentheses(input)).toBe(false);
    });

    test('input with more opening parentheses returns false', () => {
        const input = '((abc)';
        expect(compareParentheses(input)).toBe(false);
    });

    test('input with more closing parentheses returns false', () => {
        const input = '(abc))';
        expect(compareParentheses(input)).toBe(false);
    });

    test('input from inputs array returns correct result', () => {
        for (const input of inputs) {
            expect(compareParentheses(input)).toMatchSnapshot();
        }
    });
});

describe('countParentheses function', () => {
    test('input with opening parentheses counts correctly', () => {
        const input = '(abc)';
        const specialChar = '(';
        expect(countParentheses(input, specialChar)).toBe(1);
    });

    test('input with closing parentheses counts correctly', () => {
        const input = '(abc)';
        const specialChar = ')';
        expect(countParentheses(input, specialChar)).toBe(1);
    });

    test('input with multiple parentheses counts correctly', () => {
        const input = '((abc))';
        const specialChar = '(';
        expect(countParentheses(input, specialChar)).toBe(2);
    });

    test('input without parentheses returns 0', () => {
        const input = 'abc';
        const specialChar = '(';
        expect(countParentheses(input, specialChar)).toBe(0);
    });
});