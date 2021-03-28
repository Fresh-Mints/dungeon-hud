import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Types } from 'mongoose'
import { CharacterSheet } from './character-sheet.model';
import { CharacterSheetService } from './character-sheet.service';
import {
    CreateCharacterSheetInput, UpdateCharacterSheetInput
} from './dto';

@Resolver(() => CharacterSheet)
export class CharacterSheetResolver {
    constructor(private characterSheetService: CharacterSheetService) {}

    @Query(() => CharacterSheet)
    async findOneSheetById(@Args('_id', { type: () => String }) _id: Types.ObjectId) {
        return this.characterSheetService.findOneSheetById(_id);
    }

    @Query(() => [CharacterSheet])
    async findManySheetsByUser(@Args('user', { type: () => String }) user: string) {
        const foundSheets = await this.characterSheetService.findManySheetsByUser(user);
        if (foundSheets == []) {
            return new Error('No sheets found');
        }
        return foundSheets
    }

    @Mutation(() => CharacterSheet)
    async createCharacterSheet(@Args('createCharacterSheetInput') createCharacterSheetInput: CreateCharacterSheetInput) {
        return this.characterSheetService.create(createCharacterSheetInput);
    }

    @Mutation(() => CharacterSheet)
    async updateCharacterSheet(@Args('updateSheetInp') updateCharacterSheetInput: UpdateCharacterSheetInput) {
        return this.characterSheetService.update(updateCharacterSheetInput);
    }
}
