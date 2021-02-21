import characterSheetSchema, { CharacterSheetModel } from './character-sheet.model';
import abilityScoresSchema, { AbilityScoresModel } from './ability-scores.model';
import { stitchSchemas } from 'graphql-tools';

export const schema = stitchSchemas({
    subschemas: [
        characterSheetSchema,
        abilityScoresSchema,
    ]
})

export const models = { CharacterSheetModel, AbilityScoresModel};