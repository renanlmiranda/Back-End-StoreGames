import { Router } from 'express';
import productsRouter from './products';

const routes = Router();

routes.use('/products', productsRouter);

export default routes;
