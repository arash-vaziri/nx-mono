import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrganizationsModule } from '../organizations/organizations.module';
import { PermissionsModule } from '../permissions/permissions.module';
import { RolesModule } from '../roles/roles.module';

@Module({
  imports: [
    //<-- add DB

    TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'data/myDB.sqlite3',
          autoLoadEntities: true,
          //synchronize: true, // auto-create tables (disable in prod!)
    }),
    
    UsersModule,
    OrganizationsModule,
    PermissionsModule,
    RolesModule

  ],
})
export class AppModule {}
