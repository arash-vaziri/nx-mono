import { Column, PrimaryGeneratedColumn } from "typeorm";

export class Task {
    @PrimaryGeneratedColumn()
    id : number;
    
    @Column()
    title : string;
    
    @Column()
    org_id: string;
    
    @Column()
    created_by: string;
    
    @Column()
    status: string;

    @Column()
    order: number;

    @Column()
    category: string;



}
