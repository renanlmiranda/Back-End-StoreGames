import { Router } from 'express';
import { getRepository } from 'typeorm';
import CreateProductService from '../services/CreateProductService';
import Product from '../models/Product';

const productsRouter = Router();

productsRouter.get('/', async (request, response) => {
  const productsRepository = getRepository(Product);
  const listAll = await productsRepository.find({});

  return response.json(listAll);
});

// productsRouter.get('/:_id', async (request, response) => {
//   const productsRepository = getRepository(Product);
//   const { productId } = request.body;

//   return response.json();
// });

productsRouter.post('/', async (request, response) => {
  try {
    const {
      name,
      description,
      quantity,
      price,
      createdBy,
      deletedAt,
      createdAt,
    } = request.body;

    const createProduct = new CreateProductService();

    const product = await createProduct.execute({
      name,
      description,
      quantity,
      price,
      createdBy,
      deletedAt,
      createdAt,
    });

    return response.json(product);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default productsRouter;
