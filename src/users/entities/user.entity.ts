import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({
        unique: true
    })
    username: string;

    @Column()
    password: string;

    @Column()
    role: Role
}

export enum Role {
    USER = 'USER',
    ADMIN = 'ADMIN'
}
