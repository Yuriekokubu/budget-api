import { MigrationInterface, QueryRunner } from "typeorm";

export class Init1728105532586 implements MigrationInterface {
    name = 'Init1728105532586'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" ADD "newColumn" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "item" DROP COLUMN "newColumn"`);
    }

}
