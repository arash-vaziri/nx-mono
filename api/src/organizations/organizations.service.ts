import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { OrganizationEntity } from './types/organizations.entity';
import { Repository } from 'typeorm';
import { CreateOrganizationDto } from './types/create-organizations.dto';
import { UpdateOrganizationDto } from './types/update-organizations.dto';

@Injectable()
export class OrganizationsService {

    constructor(@InjectRepository(OrganizationEntity) private readonly orgRepo : Repository<OrganizationEntity>) {}

    async list() {

        return await this.orgRepo.find({
            relations: ['parent'],
        });
        
    }
   
    async single(id : number) {

        return await this.orgRepo.findOne(
        {   
            where : {id},
            relations: ['children'],
        });
        
    }
    
    async create(org : CreateOrganizationDto) {

        const organization = await this.orgRepo.create(org);

        if(org.parent_org)
            organization.parent = {id : org.parent_org} as OrganizationEntity;


        return await this.orgRepo.save(organization);
        
    }


    async update(id : number , org : UpdateOrganizationDto) {
        
        const prepOrg = {
            title : org.title,
            parent : org.parent_org  
                    ?{id : org.parent_org} as OrganizationEntity
                    : undefined ,
        }
    
        await this.orgRepo.update(id , prepOrg);
        return this.single(id);
            
    }
    
    async delete(id: number) {

        const target = await this.orgRepo.findOne({where : { id } });
        if(!target)
            throw new NotFoundException();

        await this.orgRepo.delete(target)

        return target;

    }






}
