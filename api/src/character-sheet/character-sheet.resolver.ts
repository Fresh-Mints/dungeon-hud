import { Query, Args, Mutation, Resolver } from '@nestjs/graphql';
import { CharacterSheetService } from './character-sheet.service';
import { CharacterSheetType } from './dto/create-character-sheet.dto';

@Resolver()
export class CharacterSheetResolver {
    constructor(private readonly characterSheetService: CharacterSheetService) {}

    @Query(() => [CharacterSheetType])
    async characterSheets(): Promise<CharacterSheetType[]> {
        return this.characterSheetService.findAll();
    }

    @Mutation(() => CharacterSheetType)
    async createCharacterSheet(@Args('input') input: CharacterSheetType): Promise<CharacterSheetType> {
        return this.characterSheetService.create(input);
    }
    
    @Mutation(() => CharacterSheetType)
    async updateCharacterSheet(
        @Args('id') id: string,
        @Args('input') input: CharacterSheetType,
    ): Promise<CharacterSheetType> {
        return this.characterSheetService.update(id, input);
    }

    @Mutation(() => CharacterSheetType)
    async deleteCharacterSheet(
        @Args('id') id: string
    ): Promise<CharacterSheetType> {
        return this.characterSheetService.delete(id);
    }

    @Query(() => String)
    async hello() {
        return 'hello';
    }
}
