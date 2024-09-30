import { MigrationInterface, QueryRunner } from 'typeorm';

export class Migrations1727701066822 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "user" (
        "id" SERIAL PRIMARY KEY,
        "firstName" character varying NOT NULL,
        "lastName" character varying NOT NULL
      )`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
