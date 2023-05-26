import pokemonSchema  from './pokemon.schema';
import { POKEMON_MESSAGE } from './pokemon.constants';
import { IPokemon } from './pokemon.types';


const create = (pokemon: IPokemon) => pokemonSchema.create(pokemon);
 const getRandom=() =>{
    
    const pokemon=pokemonSchema.getRandom() 
    if(pokemon){
        return pokemon;
    }
    else 
    throw POKEMON_MESSAGE.NOT_FOUND;
}
 const deleteOne =(id:string)=> pokemonSchema.deleteOne(id); 
 




export default{
    create,
    getRandom,
    deleteOne
}