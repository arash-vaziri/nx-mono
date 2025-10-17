import { Injectable, NotFoundException, PipeTransform } from "@nestjs/common";
import { Repository } from "typeorm";
import { PermissionEntity } from "../types/permissions.entity";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class IsValidPermission implements PipeTransform<number, Promise<PermissionEntity>> {
  constructor( @InjectRepository(PermissionEntity) private readonly permissionRepo: Repository<PermissionEntity>) {}

  async transform(permissionId: number) {
    const permission = await this.permissionRepo.findOne({ where: { id: permissionId } });
    if (!permission) 
        throw new NotFoundException(`Role ${permissionId} not found`);
    
    return permission;
  
  }

}