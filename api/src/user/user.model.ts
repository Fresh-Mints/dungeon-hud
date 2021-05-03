import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, SchemaFactory, Schema } from '@nestjs/mongoose';
import { Document, Types } from 'mongoose';

@ObjectType()
@Schema()
export class User {
  @Field(() => String, { description: 'id' })
  _id: Types.ObjectId;

  @Field(() => String, {description: 'Password'})
  @Prop({required: true})
  password: string;

  @Field(() => String, {description: 'Email'})
  @Prop({
    required: true,
    unique: true,
    match: /.+\@.+\..|/,
  })
  email: string;

  @Field(() => String, {description: 'First Name'})
  @Prop({required: true})
  firstName: string;

  @Field(() => String, {description: 'Last Name'})
  @Prop({required: true})
  lastName: string;

  @Field(() => String, {description: 'Token'})
  token: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);