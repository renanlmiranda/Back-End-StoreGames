import { uuid } from 'uuidv4';

class Product {
  id: string;

  name: string;

  description: string;

  quantity: number;

  price: number;

  createdBy: string;

  createdAt: string;

  constructor(
    name: string,
    description: string,
    quantity: number,
    price: number,
    createdBy: string,
    createdAt: string,
  ) {
    this.id = uuid();
    this.name = name;
    this.description = description;
    this.quantity = quantity;
    this.price = price;
    this.createdBy = createdBy;
    this.createdAt = createdAt;
  }
}

export default Product;
