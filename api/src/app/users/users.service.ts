import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { NotFoundError } from 'rxjs';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {


    constructor(@InjectRepository(Users)
                private readonly userRepo :Repository<Users>) {}


    async create(params: CreateUserDto) {
       
        try {

            const user = this.userRepo.create(params); 
            return await this.userRepo.save(user);
        
        } catch(e) {
            throw new BadRequestException({ message : e.message});
        }

    }

    async list() : Promise<CreateUserDto[]> {
        return await this.userRepo.find();
    }

    async single(id : number) : Promise<Users | NotFoundError> {
        
        try {

            return await this.userRepo.findOneOrFail({ where : { id}})
        } catch(e) {
            throw new NotFoundException();
        }
    
        
    }

    async update(id : number , user : UpdateUserDto) : Promise< Users | NotFoundError> {
        
        try {

            await this.userRepo.update(id ,user);
            
            return this.single(id);
            
            

        } catch(e) {
            throw new NotFoundException();
        }
    
        
    }

    async delete(id: number) : Promise<Users | NotFoundException> {

        const target = await this.userRepo.findOne({where : { id} });
        if(!target)
            throw new NotFoundException();

        await this.userRepo.softRemove(target)

        return target;

    }





}
