import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose'
import { User, UserDocument } from './user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name) private userModel: Model<UserDocument>,
  ) {}

  create(createUserInput: CreateUserInput) {
    const createdUserInput = new this.userModel(createUserInput);
    return createdUserInput.save();
  }

  findAll() {
    return `This action returns all user`;
  }

  findOneById(id: Types.ObjectId) {
    return `This action returns a #${id} user`;
  }

  findOneUserByEmail(email: string) {
    return this.userModel.findOne({email: email}).exec();
  }

  update(id: Types.ObjectId, updatedUserInput: UpdateUserInput) {
    return this.userModel.findOneAndUpdate(
      {_id: id },
      {updatedUserInput},
      {returnOriginal: false}
    )
  }

  remove(id: Types.ObjectId) {
    return `This action removes a #${id} user`;
  }

  async login(email: string, password: string) {
    return this.findOneUserByEmail(email);
  }
}
