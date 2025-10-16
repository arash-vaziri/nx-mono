import { IsNotEmpty, IsNumber, IsOptional, MinLength } from "class-validator";

export class CreateOrganizationDto {


    @IsNotEmpty()
    @MinLength(3)
    title! : string;


    @IsNumber()
    @IsOptional()
    parent_org!: number;



}
