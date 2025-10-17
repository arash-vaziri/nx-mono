import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { PermissionEntity } from "../../permissions/types/permissions.entity";

@Entity('roles')
export class RolesEntity {


    @PrimaryGeneratedColumn()
    id! : number;

    @Column()
    title! : string

    @ManyToMany(() => PermissionEntity, (permission) => permission.title, {
         cascade: true, // optional, for auto-save of related entities
    })

    @JoinTable({
        name: 'role_permissions',
        joinColumn: {
        name: 'role_id',
        referencedColumnName: 'id',
        },
        inverseJoinColumn: {
        name: 'permission_id',
        referencedColumnName: 'id',
        },
    })
    
    permissions!: PermissionEntity[];


}