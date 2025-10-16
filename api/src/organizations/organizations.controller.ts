import { Body, Controller, Delete, Get, Param, ParseIntPipe, Patch, Post } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './types/create-organizations.dto';
import { UpdateOrganizationDto } from './types/update-organizations.dto';

@Controller('organizations')
export class OrganizationsController {
  constructor(private readonly service: OrganizationsService) {}



  @Get()
  list() {

    return this.service.list();

  }


  @Get(':id')
  async findOne(@Param('id' , ParseIntPipe) id: number) {

      return await this.service.single(id);
  }


  @Post()
  async create(@Body() org:CreateOrganizationDto) {

      return await this.service.create(org);
  }


  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id : number , @Body() user:UpdateOrganizationDto) {

      return await this.service.update(id,user);

  }
      
  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id : number) {

      return await this.service.delete(id);

  }




}
