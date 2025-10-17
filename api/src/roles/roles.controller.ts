import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesDto } from './types/create-roles.dto';

import { RolesEntity } from './types/roles.entity';
import { PermissionEntity } from '../permissions/types/permissions.entity';

import { IsValidPermission } from '../permissions/pipes/isValidPermission.pipe';
import { IsValidRole } from './pieps/isValidRole.pipe';

@Controller('roles')
export class RolesController {
  
  constructor(private readonly service: RolesService) {}

  @Get()
  list() {

    return this.service.list();

  }

   @Get(':id')
   async findOne(@Param('id' , ParseIntPipe) id: number) {

       return await this.service.single(id);
   }

  @Post()
  async create(@Body() role:RolesDto) {

      await this.service.create(role);
      return role;
  
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id : number) {

      return await this.service.delete(id);

  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id : number , @Body() role:RolesDto) {

      return await this.service.update(id,role);

  }

  @Post(':roleId/permissions/:permissionId')
  addPermission(
    @Param('roleId', IsValidRole) role: RolesEntity,
    @Param('permissionId', IsValidPermission) permission: PermissionEntity,
  ) {
    return this.service.addPermissionToRole(role, permission);
  }
  
  @Delete(':roleId/permissions/:permissionId')
  removePermission(
    @Param('roleId', IsValidRole) role: RolesEntity,
    @Param('permissionId', IsValidPermission) permission: PermissionEntity,
  ) {
    return this.service.removePermissionToRole(role, permission);
  }



  
}
