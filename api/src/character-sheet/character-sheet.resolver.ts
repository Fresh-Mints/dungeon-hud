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

    @Mutation(() => CharacterSheet)
    async createCharacterSheet(@Args('payload') payload: CreateCharacterSheetInput) {
        return this.characterSheetService.create(payload);
    }
}
