import * as mongoose from 'mongoose';

export const AbilityScoresSchema = new mongoose.Schema({
    AbilityScores: {
        strength: Number,
        dexterity: Number,
        constitution: Number,
        intelligence: Number,
        wisdom: Number,
        charisma: Number,
    },
})

export const CharacterSheetSchema = new mongoose.Schema({
    name: String,
    abilityScores: [AbilityScoresSchema],
    description: String,
});