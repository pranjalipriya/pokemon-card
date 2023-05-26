import { NextFunction, Response, Request} from "express";
import pokemonSchema from "../modules/pokemon/pokemon.schema";

 const validateFactoryFunction=(source: 'body' , key:string) => {
    return (req: Request, res: Response, next: NextFunction) => {
     const value=(req[source] as any)[key];
     const error=`${key} Not Valid`
     if( typeof(req.body.name)!=="string")
     {
         next("Please enter a String for name");
     }
     if(!value){
        res.locals={...res.locals , [key]: error};
     }
     next();
                                                      
    }
}

export const body=(key: string) => validateFactoryFunction('body',key);


export const checkNumberOfAttacks =(req: Request,res: Response,next: NextFunction)=>{
    if(req.body.attacks.length < 3)
    {
         return next("Enter atleast 3 attacks");
    }
     next();
} 



export const checkDuplicateName = (req: Request,res: Response, next: NextFunction) => {
    for (let pokemon of pokemonSchema.pokemons) {
      if (pokemon.name === req.body.name) {
        return next({ message: "Duplicate pokemon can't be added" });
      }
    }
    next();
  };

export const validate =(req: Request,res: Response,next: NextFunction)=>{
   
    if(Object.keys(res.locals).length)
       {
           return next(res.locals);
       }
       next();
   }











