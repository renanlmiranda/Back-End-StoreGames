import { Router } from 'express';
import Product from '../models/products';

const productsRouter = Router();

const products: Product[] = [];

// List all products
productsRouter.get('/', (request, response) => {
  return response.json(products);
});

// Create a product
productsRouter.post('/', (request, response) => {
  const {
    name,
    description,
    quantity,
    price,
    createdBy,
    createdAt,
  } = request.body;

  const product = new Product(
    name,
    description,
    quantity,
    price,
    createdBy,
    createdAt,
  );

  products.push(product);

  return response.json(product);
});

export default productsRouter;
