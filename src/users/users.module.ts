import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './aggreate/user.aggregate';
import { UsersController } from './users.controller';
import { CqrsModule } from '@nestjs/cqrs';
import { GetUsersHandler } from './queries/get-users/get-users.handler';

@Module({
  imports: [TypeOrmModule.forFeature([User]), CqrsModule],
  controllers: [UsersController],
  providers: [GetUsersHandler],
})
export class UsersModule {}
