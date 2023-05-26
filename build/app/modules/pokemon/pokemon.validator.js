"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.requestValidator = void 0;
const validators_1 = require("../../utility/validators");
exports.requestValidator = [
    (0, validators_1.body)("name"),
    (0, validators_1.body)("type"),
    (0, validators_1.body)("evolutionCycle"),
    (0, validators_1.body)("attacks"),
    (0, validators_1.body)("weakness"),
    (0, validators_1.body)("url"),
    validators_1.checkNumberOfAttacks,
    validators_1.checkDuplicateName,
    validators_1.validate
];
//# sourceMappingURL=pokemon.validator.js.map