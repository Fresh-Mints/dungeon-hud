import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './user.model';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import * as bcrypt from 'bcrypt';
import { forwardRef, Inject, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth-guard';
import { CurrentUser } from './user.decorator';
import { Types } from 'mongoose';
import { AuthService } from 'src/auth/auth.service';

@Resolver(() => User)
export class UserResolver {
  constructor(
    private userService: UserService,
    private readonly authService: AuthService
    ) {}

  @Mutation(() => User)
  async signUp(@Args('CreateUserInput') CreateUserInput: CreateUserInput) {
    console.log(CreateUserInput)
    const saltOrRounds = 10;
    CreateUserInput.password = await bcrypt.hash(CreateUserInput.password, saltOrRounds);
    const newUser = await this.userService.create(CreateUserInput)
    console.log(newUser)
    const token = await this.authService.login(newUser);
    return {token, ...newUser};
  }

  @Query(() => [User], { name: 'user' })
  @UseGuards(JwtAuthGuard)
  findAll() {
    return this.userService.findAll();
  }

  @Query(() => User, { name: 'user' })
  @UseGuards(JwtAuthGuard)
  findOneById(@CurrentUser() user: User) {
    return this.userService.findOneById(user._id);
  }

  @Query(() => User, { name: 'login'})
  async login(@Args('email') email: string, @Args('password') password: string) {
    return this.userService.login(email, password);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  updateUser(@CurrentUser() user: User) {
    return this.userService.update(user._id, user);
  }

  @Mutation(() => User)
  @UseGuards(JwtAuthGuard)
  removeUser(@Args('id', { type: () => String }) id: Types.ObjectId) {
    return this.userService.remove(id);
  }
}

