import { Router } from 'express';
import CreateProductService from '../services/CreateProductService';

const productsRouter = Router();

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
