import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PermissionEntity } from './types/permissions.entity';
import { Repository } from 'typeorm';
import { PermissionsDto } from './types/permissions.dto';

@Injectable()
export class PermissionsService {

    constructor(@InjectRepository(PermissionEntity) private readonly permissionRepo : Repository<PermissionEntity>) {}


    async list() {
        return await this.permissionRepo.find();
    }

    async single(id : number) : Promise<PermissionsDto> {
            
            return await this.permissionRepo.findOneOrFail({ where : { id}})
    }


    async update(id : number , permission : PermissionsDto) {

        await this.permissionRepo.update(id , permission);
        return this.single(id);
    }









}
