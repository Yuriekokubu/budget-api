import { MigrationInterface, QueryRunner } from "typeorm";

export class AddDescriptionColumnToItem1729066194040 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        // Add the description column to the item table
        await queryRunner.query(`
            ALTER TABLE item ADD COLUMN description VARCHAR;
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        // Remove the description column in case of a rollback
        await queryRunner.query(`
            ALTER TABLE item DROP COLUMN description;
        `);
    }

}
