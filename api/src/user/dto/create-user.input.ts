import { InputType, Int, Field } from '@nestjs/graphql';
import { Prop } from '@nestjs/mongoose';
import { Types } from 'mongoose';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'Example field (placeholder)' })
  @Prop({ required: true})
  username: string;

  @Field(() => String, { description: 'Password'})
  @Prop({ required: true})
  password: string;

  @Field(() => String, {description: 'email'})
  @Prop({ required: true})
  email: string;

  @Field(() => String, {description: 'First Name'})
  @Prop({ required: true })
  firstName: string
  
  @Field(() => String, {description: 'Last Name'})
  @Prop({required: true})
  lastName: string;
}
