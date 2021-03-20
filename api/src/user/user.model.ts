import { ObjectType, Field } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@ObjectType()
export class User {
  @Field(() => String, { description: 'id' })
  @Prop({ type: Types.ObjectId, required: true })
  _id: Types.ObjectId;

  @Field(() => String, {description: 'Name'})
  @Prop({required: true})
  username: string;

  @Field(() => String, {description: 'Password'})
  @Prop({required: true})
  password: string;

  @Field(() => String, {description: 'Email'})
  @Prop({required: true})
  email: string;

  @Field(() => String, {description: 'First Name'})
  @Prop({required: true})
  firstName: string;

  @Field(() => String, {description: 'Last Name'})
  @Prop({required: true})
  lastName: string;
}
