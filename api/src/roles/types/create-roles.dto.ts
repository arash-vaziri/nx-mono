import { IsNotEmpty, MinLength } from "class-validator";



export class RolesDto {

    // @IsNumber()
    // id! : number;

    @IsNotEmpty()
    @MinLength(3)
    title!: string;




}