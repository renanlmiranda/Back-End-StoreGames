import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  _id: string;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  quantity: number;

  @Column()
  price: number;

  @Column()
  createdBy: string;

  @Column('timestamp')
  createdAt: Date;

  @Column('timestamp')
  updatedAt: Date;

  @Column('timestamp')
  deletedAt: Date;
}

export default Product;
