
import { Exclude } from 'class-transformer';
import { Column, 
         CreateDateColumn, 
         DeleteDateColumn, 
         Entity, 
         PrimaryGeneratedColumn} from 'typeorm';




@Entity({name : 'user'})
export class UserEntity {


    @PrimaryGeneratedColumn()
    id! : number;

    @Column()
    full_name!: string;

    @Column({ unique : true})
    email!: string;

    @CreateDateColumn({ type: 'datetime' })
    created_at!: Date;

    @Column()
    @Exclude()
    password!: string;

    @Exclude()
    @DeleteDateColumn({ nullable: true })
    deleted_at?: Date;

}