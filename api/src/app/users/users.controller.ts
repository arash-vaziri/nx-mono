import { Body, Controller, Get, Param, Post, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {


    @Get()
    findAll() {
        return [];
    }


    @Get(':id')
    findOne(@Param('id') id: string) {

        return {
            id
        }
    }

    @Post()
    create(@Body() user:CreateUserDto) {

        return user;

    }




}
