
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class UserEntity {


    @PrimaryGeneratedColumn()
    id! : number;

    @Column()
    full_name!: string;

    @Column({ unique : true})
    email!: string;

    @CreateDateColumn()
    created_at!: string;

    @Column()
    password!: string;

}