import { Application,Request, Response, NextFunction,json } from 'express';
import { Response as responseHandler  } from '../../utility/response-handler';
import {routes,} from './routes.data';


export const registerRoutes=(app: Application)=>{
    app.use(json());
    for(let route of routes)
    {
        app.use(route.path, route.router);
    }

    app.use((err: any, req: Request, res: Response, next: NextFunction)=>{
    res.status(err.statusCode|| 500).send(new responseHandler(null , err));
    }
    )
}