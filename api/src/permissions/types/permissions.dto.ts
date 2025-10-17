import { IsNotEmpty } from "class-validator";


export class PermissionsDto {

    @IsNotEmpty()
    title! : string;

}