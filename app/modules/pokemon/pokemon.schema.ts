import { IPokemon } from "./pokemon.types";
import {v4} from "uuid";

class PokemonSchema{
   
pokemons: IPokemon[] = [];

create(pokemon: IPokemon) {
   this.pokemons.push({ ...pokemon, id:v4() });

    return true;
}

 getRandom(){
    const index=Math.floor(Math.random()*this.pokemons.length);

    return this.pokemons[index];
 }
 deleteOne(id: string) {
   const pokemonIndex = this.pokemons.findIndex(a => a.id === id);

   if (pokemonIndex !== -1) {
       this.pokemons.splice(pokemonIndex, 1);
       return true;
   }

   return false;
}
}

const pokemonSchema= new PokemonSchema();
export default pokemonSchema;