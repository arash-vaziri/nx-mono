import { Injectable, NotFoundException } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './types/user.entity';
import { CreateUserDto } from './types/create-user.dto';
import { UpdateUserDto } from './types/update-user.dto';

import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {


    constructor(@InjectRepository(UserEntity)
                private readonly userRepo : Repository<UserEntity> ) {}


    async create(params: CreateUserDto) {

            const user = this.userRepo.create(params); 
            user.password = await bcrypt.hash(user.password, 10);
            return await this.userRepo.save(user);
    }

    async list() : Promise<CreateUserDto[]> {
        return await this.userRepo.find();
    }

    async single(id : number) : Promise<UserEntity> {
        
        return await this.userRepo.findOneOrFail({ where : { id}})
    }

    async update(id : number , user : UpdateUserDto) : Promise< UserEntity> {

            if(user.password)
                user.password = await bcrypt.hash(user.password, 10);

            await this.userRepo.update(id ,user);
            return this.single(id);
        
    }

    async delete(id: number) : Promise<UserEntity | NotFoundException> {

        const target = await this.userRepo.findOne({where : { id} });
        if(!target)
            throw new NotFoundException();

        await this.userRepo.softRemove(target)

        return target;

    }





}
