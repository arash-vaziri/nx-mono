import { Module } from '@nestjs/common';
import { UsersModule } from '../users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    //<-- add DB

    TypeOrmModule.forRoot({
          type: 'sqlite',
          database: 'data/myDB.sqlite3',
          autoLoadEntities: true,
          //synchronize: true, // auto-create tables (disable in prod!)
    }),
    
    UsersModule
  ],
})
export class AppModule {}
