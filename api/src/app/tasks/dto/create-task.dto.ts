import { PickType } from "@nestjs/mapped-types";
import { Task } from "../entities/task.entity";
import { IsIn, Min } from 'class-validator'

export class CreateTaskDto extends PickType(Task,['title', 'category', 'status'] as const) {


    @Min(3)
    title : string;


    @IsIn(['work', 'personal'])
    category: string;
    
    
    
    @IsIn(['initiate', 'in progress' ,'done' ])
    status: string;

}
