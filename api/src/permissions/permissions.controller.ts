import { Body, Controller, Get, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsDto } from './types/permissions.dto';


@Controller('permissions')
export class PermissionsController {
  
  constructor(private readonly service: PermissionsService) {}



  @Get()
  list() {

    return this.service.list();

  }

  @Patch(':id')
  async update(@Param('id', ParseIntPipe) id : number , @Body() permission: PermissionsDto ) {

      return await this.service.update( id , permission );

  }




  
}
