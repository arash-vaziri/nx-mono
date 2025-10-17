import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RolesEntity } from './types/roles.entity';
import { Repository } from 'typeorm';
import { RolesDto } from './types/create-roles.dto';
import { PermissionEntity } from '../permissions/types/permissions.entity';

@Injectable()
export class RolesService {


    constructor(@InjectRepository(RolesEntity) private readonly rolesRepo : Repository<RolesEntity>){}


    async list() {
        return await this.rolesRepo.find({
            relations : ['permissions']
        });
    }


    async create(params: RolesDto) {
    
        const role = this.rolesRepo.create(params); 
        return await this.rolesRepo.save(role);
    
    }

    async single(id : number) : Promise<RolesEntity> {
            
        return await this.rolesRepo.findOneOrFail({ where : { id} } )
    }


    async delete(id: number) : Promise<RolesEntity | NotFoundException> {
    
        const target = await this.rolesRepo.findOne({where : { id} });
        if(!target)
            throw new NotFoundException();

        await this.rolesRepo.delete(target)

        return target;

    }

    async update(id : number , role : RolesDto) {
    
    
        await this.rolesRepo.update(id ,role);
        return this.single(id);
            
        
    }

    async addPermissionToRole(role : RolesEntity, permission : PermissionEntity) {
        
        const alreadyExists = role.permissions.some((p) => p.id === permission.id);
        if (!alreadyExists) {
            role.permissions.push(permission);
            await this.rolesRepo.save(role);
        }

        return role;
    }

    async removePermissionToRole(role : RolesEntity, permission : PermissionEntity) {
        
        const index = role.permissions.map((p) => p.id).indexOf(permission.id);
        if (index !== -1) {
            role.permissions.splice(index,1);
            await this.rolesRepo.save(role);
        }

        return role;
    }







}
