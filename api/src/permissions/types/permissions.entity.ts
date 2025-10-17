import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { RolesEntity } from "../../roles/types/roles.entity";


@Entity('permissions')
export class PermissionEntity {

    @PrimaryGeneratedColumn()
    id! : number;


    @Column()
    title! : string;

    @ManyToMany(() => RolesEntity, (role) => role.permissions)
    roles!: RolesEntity[];


} 
