import * as mongoose from 'mongoose';

export const AbilityScore = new mongoose.Schema({
    name: String,
    number: Number,
})

export const CharacterSheetSchema = new mongoose.Schema({
    name: String,
    abilityScores: [AbilityScore],
    description: String,
});