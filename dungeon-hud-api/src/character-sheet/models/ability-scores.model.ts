import mongoose, { Schema, Document } from 'mongoose';

export interface IAbilityScores extends Document {
    readonly strength: number;
    readonly dexterity: number;
    readonly constitution: number;
    readonly intelligence: number;
    readonly wisdom: number;
    readonly charisma: number;
}

const AbilityScoresSchema: Schema = new Schema({
    strength: { type: Number, required: true },
    dexterity: { type: Number, required: true },
    constitution: { type: Number, required: true },
    intelligence: { type: Number, required: true },
    wisdom: { type: Number, required: true },
    charisma: { type: Number, required: true },
});

export default mongoose.model<IAbilityScores>('AbilityScores', AbilityScoresSchema);