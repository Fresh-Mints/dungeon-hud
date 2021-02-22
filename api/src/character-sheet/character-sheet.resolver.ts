import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose'
import { CharacterSheet } from './character-sheet.model';
import { CharacterSheetService } from './character-sheet.service';
import {
    CreateCharacterSheetInput
} from './dto';

@Resolver(() => CharacterSheet)
export class CharacterSheetResolver {
    constructor(private characterSheetService: CharacterSheetService) {}

    @Query(() => CharacterSheet)
    async characterSheet(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
        return this.characterSheetService.getById(_id);
    }

    @Query(() => CharacterSheet)
    async findCharacterSheetsByUser(@Args('_user', { type: () => String }) user: string) {
        return this.characterSheetService.getManyByUser(user);
    }

    @Mutation(() => CharacterSheet)
    async createCharacterSheet(@Args('createCharacterSheetInput') createCharacterSheetInput: CreateCharacterSheetInput) {
        return this.characterSheetService.create(createCharacterSheetInput);
    }
}
