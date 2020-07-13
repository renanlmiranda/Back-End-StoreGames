import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export default class CreateProducts1594580964120 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'products',
        columns: [
          {
            name: '_id',
            type: 'varchar',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'name',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'description',
            type: 'varchar',
            isNullable: false,
          },
          {
            name: 'quantity',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'price',
            type: 'int',
            isNullable: false,
          },
          {
            name: 'createdBy',
            type: 'varchar',
          },

          {
            name: 'createdAt',
            type: 'timestamp with time zone',
            isNullable: false,
          },
          {
            name: 'deletedAt',
            type: 'timestamp with time zone',
            isNullable: true,
            default: 'null',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('products');
  }
}
