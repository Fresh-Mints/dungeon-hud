import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Types.ObjectId)
  @Prop({required: true})
  _id: Types.ObjectId;
}
