"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pokemon_schema_1 = __importDefault(require("./pokemon.schema"));
const pokemon_constants_1 = require("./pokemon.constants");
const create = (pokemon) => pokemon_schema_1.default.create(pokemon);
const getRandom = () => {
    const pokemon = pokemon_schema_1.default.getRandom();
    if (pokemon) {
        return pokemon;
    }
    else
        throw pokemon_constants_1.POKEMON_MESSAGE.NOT_FOUND;
};
const deleteOne = (id) => pokemon_schema_1.default.deleteOne(id);
exports.default = {
    create,
    getRandom,
    deleteOne
};
//# sourceMappingURL=pokemon.service.js.map