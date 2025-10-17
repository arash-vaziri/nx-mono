import { Module } from '@nestjs/common';
import { PermissionsService } from './permissions.service';
import { PermissionsController } from './permissions.controller';

import { TypeOrmModule } from '@nestjs/typeorm';
import { PermissionEntity } from './types/permissions.entity';
import { IsValidPermission } from './pipes/isValidPermission.pipe';

@Module({
  imports: [
    TypeOrmModule.forFeature([PermissionEntity])
  ],
  controllers: [PermissionsController],
  providers: [PermissionsService , IsValidPermission],
  exports : [ TypeOrmModule , IsValidPermission ]

})
export class PermissionsModule {}
