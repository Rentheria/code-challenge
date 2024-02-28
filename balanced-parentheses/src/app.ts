import { validateParentheses } from "./assets/functions";
import { inputs } from "./assets/text";


for (const text of inputs) {
    const isValid = validateParentheses(text);
    console.log(`The string ${text} is:`);
    console.log(`   ${isValid ? 'valid' : 'invalid'}`);
}