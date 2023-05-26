import { PokemonResponse } from "./pokemon.types";

export const POKEMON_MESSAGE = {
    NOT_FOUND: new PokemonResponse(404, "POKEMON NOT FOUND"),
    POKEMON_CREATED: new PokemonResponse(201, "POKEMON CREATED"),
    POKEMON_DELETED: new PokemonResponse(200, "POKEMON DELETED"),
}
