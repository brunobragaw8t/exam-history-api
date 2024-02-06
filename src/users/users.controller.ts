import { Controller, Get } from '@nestjs/common';
import { QueryBus } from '@nestjs/cqrs';
import { GetUsersQuery } from './queries/get-users/get-users.query';
import { User } from './aggreate/user.aggregate';

@Controller('users')
export class UsersController {
  constructor(private readonly queryBus: QueryBus) {}

  @Get()
  async getUsers() {
    return await this.queryBus.execute<GetUsersQuery, User[]>(
      new GetUsersQuery(),
    );
  }
}
