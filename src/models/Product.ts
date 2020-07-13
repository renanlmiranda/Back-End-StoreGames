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

  @Column('timestamp with time zone')
  deletedAt: Date;

  @Column('timestamp with time zone')
  createdAt: Date;
}

export default Product;
