import { Injectable } from '@nestjs/common';

import {
  ReadUserDto,
  CreateUserDto,
  UpdateUserDto,
} from '../../common/contracts';

import { User } from '../../database/schemas';
import { UserRepository } from './user.repository';
import { _FilterQuery } from 'mongoose';
import { Roles } from '@Common/types/roles';

@Injectable()
export class UserService {
  constructor(private repository: UserRepository) {}

  findAll(f?: _FilterQuery<User>): Promise<User[]> {
    return this.repository.findAll(f);
  }

  findOne(f?: _FilterQuery<User>): Promise<User> {
    return this.repository.findOne(f);
  }

  findByPk(id: string): Promise<User> {
    return this.repository.findById(id);
  }

  findByUserId(id: string): Promise<User> {
    return this.repository.findByUserId(id);
  }

  create(user: CreateUserDto): Promise<User> {
    return this.repository.create(user);
  }

  async update(id: string, user: UpdateUserDto): Promise<ReadUserDto> {
    await this.repository.update(id, user);
    return this.findByPk(id);
  }

  async getUserProfile(user) {
    console.log('user --------------', user);
    const userData = await this.repository.findOne({
      uuid: user.uid,
      email: user.email,
    });

    if (userData) {
      console.log('ya existe ----', userData);
      return userData;
    }
    console.log(' user.uid,', user.uid);
    const userCreated = await this.repository.create({
      userId: user.user_id,
      email: user.email,
      name: user.name,
      imageUrl: user.picture,
      phone: user.phone_number ?? '',
      role: Roles.FATHER,
    });

    console.log(userCreated);
    return userCreated;
  }
}
