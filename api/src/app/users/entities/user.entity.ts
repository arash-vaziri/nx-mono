
import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Users {


    @PrimaryGeneratedColumn()
    id! : number;

    @Column()
    full_name!: string;

    @Column({ unique : true})
    email!: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at!: Date;

    @Column()
    password!: string;

}