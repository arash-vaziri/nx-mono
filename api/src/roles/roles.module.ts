import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RolesEntity } from './types/roles.entity';

import { PermissionsModule } from '../permissions/permissions.module';


@Module({
  imports: [ 
    TypeOrmModule.forFeature([RolesEntity]),
    PermissionsModule
  ],
  controllers: [RolesController],
  providers: [RolesService],
})
export class RolesModule {}
