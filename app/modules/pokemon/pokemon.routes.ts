import { NextFunction, Router, Request, Response as Eresponse } from "express";
import pokemonService from "./pokemon.service";
import { POKEMON_MESSAGE } from "./pokemon.constants";
import { IPokemon } from './pokemon.types';
import { Response } from "../../utility/response-handler";
import { requestValidator } from "./pokemon.validator";

const router=Router();
 

router.get('/',(req,res,next)=>{  

   const result= pokemonService.getRandom();

   res.send(result);
})

router.post("/", requestValidator, (req: Request, res: Eresponse, next: NextFunction) => {
   pokemonService.create(req.body as IPokemon);
   res.send(new Response(POKEMON_MESSAGE.POKEMON_CREATED));                                                                               
});   

router.delete("/:id", (req, res, next) => {
   const { id } = req.params;
   
   const didDelete = pokemonService.deleteOne(id);

   if (didDelete) {
       return res.status(404).send(new Response(POKEMON_MESSAGE.POKEMON_DELETED));
   }

   next(POKEMON_MESSAGE.NOT_FOUND);
});

export default router;
