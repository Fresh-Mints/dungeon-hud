import mongoose, { Schema, Document } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';
import { GraphQLSchema } from 'graphql';
import abilityScoresSchema, { IAbilityScores } from './ability-scores.model';

export interface ICharacterSheet extends Document {
    readonly name: string;
    readonly abilityScores: IAbilityScores;
    readonly description?: string;
};

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
const CharacterSheetSchema = new mongoose.Schema({
    name: { type: String, required: true },
    abilityScores: {
        type: abilityScoresSchema,
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
    characterSheetById: CharacterSheetTC.mongooseResolvers.findById(),
    characterSheetByMany: CharacterSheetTC.mongooseResolvers.findByIds(),
    characterSheetOne: CharacterSheetTC.mongooseResolvers.findOne(),
    characterMany: CharacterSheetTC.mongooseResolvers.findMany(),
});

schemaComposer.Mutation.addFields({
    characterSheetOne: CharacterSheetTC.mongooseResolvers.createOne(),
    characterSheetMany: CharacterSheetTC.mongooseResolvers.createMany(),
    characterSheetById: CharacterSheetTC.mongooseResolvers.updateById(),
    characterSheetUpdateOne: CharacterSheetTC.mongooseResolvers.updateOne(),
    characterSheetUpdateMany: CharacterSheetTC.mongooseResolvers.updateMany(),
    characterSheetRemoveById: CharacterSheetTC.mongooseResolvers.removeById(),
    characterSheetRemoveOne: CharacterSheetTC.mongooseResolvers.removeOne(),
    characterSheetRemoveMany: CharacterSheetTC.mongooseResolvers.removeMany(),
});

const characterSheetSchema = schemaComposer.buildSchema();
export default characterSheetSchema;