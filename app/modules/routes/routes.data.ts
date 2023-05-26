 import {Route,Routes} from '../routes/routes.type'; 
 import pokemonRouter from '../pokemon/pokemon.routes';

 export const routes:Routes=[
 new Route("/pokemon",pokemonRouter)
 ];


