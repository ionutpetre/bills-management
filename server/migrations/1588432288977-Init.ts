import { MigrationInterface, QueryRunner } from 'typeorm';

export class Init1588432288977 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`
    CREATE TABLE bills (
        id serial NOT NULL,
        type varchar(100) NOT NULL,
        title varchar(100) NOT NULL,
        description varchar(100) NULL,
        value decimal(5,2) NOT NULL,
        created date NOT NULL
    );`);
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query('DROP TABLE bills;');
  }
}
