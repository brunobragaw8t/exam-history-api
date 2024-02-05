import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './aggreate/user.aggregate';

@Module({ imports: [TypeOrmModule.forFeature([User])] })
export class UsersModule {}
