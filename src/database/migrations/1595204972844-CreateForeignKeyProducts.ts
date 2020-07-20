import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';

export default class CreateForeignKeyProducts1595204972844
  implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey(
      'products',
      new TableForeignKey({
        name: 'ProductUser',
        columnNames: ['createdBy'],
        referencedColumnNames: ['_id'],
        referencedTableName: 'users',
        onDelete: 'SET NULL',
        onUpdate: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('products', 'ProductUser');
  }
}
