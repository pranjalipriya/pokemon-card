import express from 'express';
import { registerRoutes } from '../app/modules/routes/routes.register';



export const startServer = () => {
    const app = express();
    registerRoutes(app);

    const { PORT } = process.env;
    app.listen(PORT,
        () => console.log(`listening on port ${PORT}`))

}
 