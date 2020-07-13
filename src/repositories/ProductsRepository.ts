import { EntityRepository, Repository } from 'typeorm';
import Product from '../models/Product';

@EntityRepository(Product)
class ProductsRepository extends Repository<Product> {
  public async findById(id: string): Promise<Product | null> {
    const findProduct = await this.findOne({
      where: { id },
    });

    return findProduct || null;
  }
}

export default ProductsRepository;
