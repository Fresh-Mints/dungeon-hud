import mongoose, { Schema, Document } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import { GraphQLSchema } from 'graphql';

export interface IAbilityScores extends Document {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
};

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const AbilityScoresSchema = new mongoose.Schema({
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    constitution: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    charisma: { type: Number, required: true },
});
const AbilityScores = mongoose.model('AbilityScores', AbilityScoresSchema);

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {};
const CharacterSheetTC = composeMongoose(AbilityScores, customizationOptions);

// STEP 3: Add needed CRUD User operations to the GraphQL Schema
schemaComposer.Query.addFields({
    characterSheetById: CharacterSheetTC.mongooseResolvers.findById(),
});

schemaComposer.Mutation.addFields({
    characterSheetRemoveById: CharacterSheetTC.mongooseResolvers.removeById(),
});

const abilityScoresSchema = schemaComposer.buildSchema();
export default abilityScoresSchema;