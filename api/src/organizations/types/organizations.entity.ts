import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('organizations')
export class OrganizationEntity {

    @PrimaryGeneratedColumn()
    id! : number;

    @Column()
    title!: string;


    @ManyToOne(() => OrganizationEntity, (org) => org.children, { nullable: true })
    @JoinColumn({ name: 'parent_org' })
    parent?: OrganizationEntity;

    // 🔹 Child organizations (one parent can have many children)
    @OneToMany(() => OrganizationEntity, (org) => org.parent)
    children?: OrganizationEntity[];

}
