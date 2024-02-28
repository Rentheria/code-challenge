"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.countParentheses = exports.compareParentheses = exports.containsOpenParentheses = exports.containsFirstOpeningParenthesis = exports.validateParentheses = void 0;
function validateParentheses(input) {
    if (input.length === 0)
        return false;
    if (!containsOpenParentheses(input))
        return false;
    if (!containsFirstOpeningParenthesis(input))
        return false;
    if (compareParentheses(input))
        return true;
}
exports.validateParentheses = validateParentheses;
function containsFirstOpeningParenthesis(input) {
    let foundOpeningParenthesis = false;
    for (const char of input) {
        if (char === '(') {
            foundOpeningParenthesis = true;
        }
        else if (char === ')') {
            // Si encontramos un ')' antes de un '('
            if (!foundOpeningParenthesis) {
                return false;
            }
            else {
                // Encontramos un ')' después de un '('
                return true;
            }
        }
    }
    // Si no encontramos ningún ')' después de un '('
    return false;
}
exports.containsFirstOpeningParenthesis = containsFirstOpeningParenthesis;
function containsOpenParentheses(input) {
    return input.includes('(');
}
exports.containsOpenParentheses = containsOpenParentheses;
function compareParentheses(input) {
    const openParentheses = countParentheses(input, '(');
    const closeParentheses = countParentheses(input, ')');
    return openParentheses === closeParentheses;
}
exports.compareParentheses = compareParentheses;
function countParentheses(input, specialChar) {
    let count = 0;
    for (const char of input) {
        if (char === specialChar)
            count++;
    }
    return count;
}
exports.countParentheses = countParentheses;
//# sourceMappingURL=functions.js.map