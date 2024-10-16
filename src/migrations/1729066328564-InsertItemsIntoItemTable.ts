import { MigrationInterface, QueryRunner } from "typeorm";

export class InsertItemsIntoItemTable1729066328564 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            INSERT INTO item (title, amount, price, "contactMobileNo", status, description)
            VALUES
                ('Laptop', 5, 1200.00, '0812345678', 'APPROVED', 'High-end gaming laptop'),
                ('Mouse', 50, 25.00, '0987654321', 'PENDING', 'Wireless optical mouse'),
                ('Keyboard', 30, 45.00, '0611122233', 'REJECTED', 'Mechanical keyboard'),
                ('Monitor', 10, 300.00, '0822233344', 'PENDING', '27-inch 4K monitor'),
                ('External Hard Drive', 20, 85.00, '0933344455', 'APPROVED', '1TB external hard drive'),
                ('Printer', 7, 150.00, '0644455566', 'REJECTED', 'Laser printer with Wi-Fi support');
        `);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`
            DELETE FROM item WHERE title IN 
            ('Laptop', 'Mouse', 'Keyboard', 'Monitor', 'External Hard Drive', 'Printer');
        `);
    }
}
