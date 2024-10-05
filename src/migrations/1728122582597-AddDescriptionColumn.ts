import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionColumn1728122582597 implements MigrationInterface {
    name = 'AddDescriptionColumn1728122582597'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" ADD "description" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "user" DROP COLUMN "description"`);
    }

}
