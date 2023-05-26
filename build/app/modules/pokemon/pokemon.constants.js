"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.POKEMON_MESSAGE = void 0;
const pokemon_types_1 = require("./pokemon.types");
exports.POKEMON_MESSAGE = {
    NOT_FOUND: new pokemon_types_1.PokemonResponse(404, "POKEMON NOT FOUND"),
    POKEMON_CREATED: new pokemon_types_1.PokemonResponse(201, "POKEMON CREATED"),
    POKEMON_DELETED: new pokemon_types_1.PokemonResponse(200, "POKEMON DELETED"),
};
//# sourceMappingURL=pokemon.constants.js.map