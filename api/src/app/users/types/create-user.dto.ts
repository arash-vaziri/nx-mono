import { IsEmail,IsNotEmpty, MinLength, MaxLength, IsOptional,IsNumber } from 'class-validator';
import { IsPassword } from '../../../common/decorators/isPassword';

export class CreateUserDto {

    // @IsNumber()
    // id?: number;

    @IsNotEmpty()
    full_name!: string;

    @IsEmail()
    email!: string;
    
    
    @MinLength(8)
    @MaxLength(12)
    @IsPassword()
    password!: string
    
    
    @IsOptional()
    created_at: Date = new Date(); // default if missing

}