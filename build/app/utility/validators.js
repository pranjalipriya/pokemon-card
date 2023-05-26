"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = exports.checkDuplicateName = exports.checkNumberOfAttacks = exports.body = void 0;
const pokemon_schema_1 = __importDefault(require("../modules/pokemon/pokemon.schema"));
const validateFactoryFunction = (source, key) => {
    return (req, res, next) => {
        const value = req[source][key];
        const error = `${key} Not Valid`;
        if (typeof (req.body.name) !== "string") {
            next("Please enter a String for name");
        }
        if (!value) {
            res.locals = Object.assign(Object.assign({}, res.locals), { [key]: error });
        }
        next();
    };
};
const body = (key) => validateFactoryFunction('body', key);
exports.body = body;
const checkNumberOfAttacks = (req, res, next) => {
    if (req.body.attacks.length < 3) {
        return next("Enter atleast 3 attacks");
    }
    next();
};
exports.checkNumberOfAttacks = checkNumberOfAttacks;
const checkDuplicateName = (req, res, next) => {
    for (let pokemon of pokemon_schema_1.default.pokemons) {
        if (pokemon.name === req.body.name) {
            return next({ message: "Duplicate pokemon can't be added" });
        }
    }
    next();
};
exports.checkDuplicateName = checkDuplicateName;
const validate = (req, res, next) => {
    if (Object.keys(res.locals).length) {
        return next(res.locals);
    }
    next();
};
exports.validate = validate;
//# sourceMappingURL=validators.js.map