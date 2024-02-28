"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./assets/functions");
const text_1 = require("./assets/text");
for (const text of text_1.inputs) {
    const isValid = (0, functions_1.validateParentheses)(text);
    console.log(`The string ${text} is:`);
    console.log(`   ${isValid ? 'valid' : 'invalid'}`);
}
//# sourceMappingURL=app.js.map