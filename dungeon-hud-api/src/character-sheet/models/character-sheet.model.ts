import mongoose, { Schema, Document } from 'mongoose';
import { IAbilityScores, AbilityScoresSchema } from './ability-scores.model';
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

export interface ICharacterSheet extends Document {
    readonly name: string;
    readonly abilityScores: IAbilityScores;
    readonly description?: string;
}

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const AbilityScoresSchema = new mongoose.Schema({
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    constitution: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    charisma: { type: Number, required: true },
})
const AbilityScores = mongoose.model('AbilityScores', AbilityScoresSchema);

const CharacterSheetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    abilityScores: {
        type: [AbilityScoresSchema],
        default: [],
        alias: 'abilityScores',
    },
    description: { type: String, required: false },
});
const CharacterSheet = mongoose.model('CharacterSheet', CharacterSheetSchema);

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {};
const CharacterSheetTC = composeMongoose(CharacterSheet, customizationOptions);

// STEP 3: Add needed CRUD User operations to the GraphQL Schema
schemaComposer.Query.addFields({
    CharacterSheetTC.mongooseResolvers.findAll(),
})