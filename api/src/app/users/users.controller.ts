import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {


    constructor(private service: UsersService) {}

    @Get()
    list() {
        return this.service.list();
    }


    @Get(':id')
    async findOne(@Param('id' , ParseIntPipe) id: number) {

        return await this.service.single(id);
    }

    @Post()
    async create(@Body() user:CreateUserDto) {


        await this.service.create(user);

        return user;

    }
    
    @Patch(':id')
    async update(@Param('id', ParseIntPipe) id : number , @Body() user:UpdateUserDto) {

        return await this.service.update(id,user);

    }
    
    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id : number) {

        return await this.service.delete(id);

    }




}
