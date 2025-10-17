import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { RolesEntity } from "../types/roles.entity";
import { Repository } from "typeorm";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class IsValidRole implements PipeTransform<number, Promise<RolesEntity>> {
  constructor( @InjectRepository(RolesEntity) private readonly roleRepo: Repository<RolesEntity>) {}

  async transform(roleId: number) {
  
    const role = await this.roleRepo.findOne(
      { 
        where: { id: roleId }, 
        relations: ['permissions'],
      },
    );
  
    if (!role) throw new NotFoundException(`Role ${roleId} not found`);
    return role;
  
  }
}