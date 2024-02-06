import { Injectable } from '@nestjs/common';
import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from './get-users.query';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/aggreate/user.aggregate';
import { Repository } from 'typeorm';

@Injectable()
@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery, User[]> {
  constructor(
    @InjectRepository(User) private readonly repo: Repository<User>,
  ) {}

  async execute(): Promise<User[]> {
    return await this.repo.find();
  }
}
