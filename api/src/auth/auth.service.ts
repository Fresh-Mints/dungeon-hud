import { Injectable } from '@nestjs/common';
import { Model, Types } from 'mongoose';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/user/user.model';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService
    ) {}

    async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findOneUserByEmail(email);
        const isMatch = await bcrypt.compare(password, user.toObject().password)
        if (isMatch && user) {
            const { password, ...result } = user
            return user
        }
        return null;
    }
}
