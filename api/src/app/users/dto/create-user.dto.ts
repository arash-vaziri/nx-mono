import { Timestamp } from "typeorm";

export class CreateUserDto {
    id : number;
    full_name: string;
    password: string;
    email: string;
    created_at: string;
}
