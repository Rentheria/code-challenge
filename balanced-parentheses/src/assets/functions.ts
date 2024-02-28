export function validateParentheses(input: string): boolean {
    if (input.length === 0) return false;
    if (!containsOpenParentheses(input)) return false;
    if (!containsFirstOpeningParenthesis(input)) return false;
    if (compareParentheses(input)) return true;
}

export function containsFirstOpeningParenthesis(input: string): boolean {
    let foundOpeningParenthesis = false;

    for (const char of input) {
        if (char === '(') {
            foundOpeningParenthesis = true;
        } else if (char === ')') {
            // Si encontramos un ')' antes de un '('
            if (!foundOpeningParenthesis) {
                return false;
            } else {
                // Encontramos un ')' después de un '('
                return true;
            }
        }
    }

    // Si no encontramos ningún ')' después de un '('
    return false;
}

export function containsOpenParentheses(input: string): boolean {
    return input.includes('(');
}

export function compareParentheses(input: string): boolean {
    const openParentheses = countParentheses(input, '(');
    const closeParentheses = countParentheses(input, ')');
    return openParentheses === closeParentheses;
}

export function countParentheses(input: string, specialChar: string): number {
    let count  = 0;
    for(const char of input) {
        if (char === specialChar) count++;
    }
    return count;
}