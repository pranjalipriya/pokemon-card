"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
class PokemonSchema {
    constructor() {
        this.pokemons = [];
    }
    create(pokemon) {
        this.pokemons.push(Object.assign(Object.assign({}, pokemon), { id: (0, uuid_1.v4)() }));
        return true;
    }
    getRandom() {
        const index = Math.floor(Math.random() * this.pokemons.length);
        return this.pokemons[index];
    }
    deleteOne(id) {
        const pokemonIndex = this.pokemons.findIndex(a => a.id === id);
        if (pokemonIndex !== -1) {
            this.pokemons.splice(pokemonIndex, 1);
            return true;
        }
        return false;
    }
}
const pokemonSchema = new PokemonSchema();
exports.default = pokemonSchema;
//# sourceMappingURL=pokemon.schema.js.map