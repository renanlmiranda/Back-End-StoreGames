import { getCustomRepository } from 'typeorm';
import Product from '../models/Product';
import ProductsRepository from '../repositories/ProductsRepository';

interface Request {
  name: string;
  description: string;
  quantity: number;
  price: number;
  createdBy: string;
  deletedAt: Date;
  createdAt: Date;
}

class CreateProductService {
  public async execute({
    name,
    description,
    quantity,
    price,
    createdBy,
    deletedAt,
    createdAt,
  }: Request): Promise<Product> {
    const productsRepository = getCustomRepository(ProductsRepository);

    if (!name) {
      throw Error('Name cannot be empty!');
    }

    if (!description) {
      throw Error('Description cannot be empty!');
    }
    if (!quantity) {
      throw Error('Quantity cannot be empty');
    }

    if (!price) {
      throw Error('Price cannot be empty');
    }

    const product = productsRepository.create({
      name,
      description,
      quantity,
      price,
      createdBy,
      deletedAt,
      createdAt,
    });

    await productsRepository.save(product);

    return product;
  }
}

export default CreateProductService;
