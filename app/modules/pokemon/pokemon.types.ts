export interface IPokemon {
    id: string;
    name: string;
    type: string;
    evolutionCycle: string;
    weakness : string;
    attacks: string[];
    url: string;
}

export class PokemonResponse {
    constructor(
        public statusCode: number,
        public message: string
    ) { }
}