import { Schema, Document, model } from 'mongoose';
import { composeMongoose } from 'graphql-compose-mongoose';
import { schemaComposer } from 'graphql-compose';

export interface IAbilityScores extends Document {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
};

export interface IFeature extends Document {
    readonly name: string;
    readonly description: string;
    readonly affectOnAbilityScores?: IAbilityScores;
}

// STEP 1: DEFINE MONGOOSE SCHEMA AND MODEL
export const AbilityScoresSchema = new Schema({
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    constitution: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    charisma: { type: Number, required: true },
});
export const AbilityScoresModel = model('AbilityScores', AbilityScoresSchema);

// STEP 2: CONVERT MONGOOSE MODEL TO GraphQL PIECES
const customizationOptions = {};
const AbilityScoreTC = composeMongoose(AbilityScoresModel, customizationOptions);

// STEP 3: Add needed CRUD User operations to the GraphQL Schema
schemaComposer.Query.addFields({
    abilityScoreFindMany: AbilityScoreTC.mongooseResolvers.findMany(),
});

schemaComposer.Mutation.addFields({
    characterSheetMany: AbilityScoreTC.mongooseResolvers.createMany(),
    characterSheetRemoveById: AbilityScoreTC.mongooseResolvers.removeById(),
});

const abilityScoresSchema = schemaComposer.buildSchema();
export default abilityScoresSchema;