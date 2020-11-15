import mongoose, { Schema, Document } from 'mongoose';
import { IAbilityScores } from './ability-scores.model';

export interface ICharacterSheet extends Document {
    readonly name: string;
    readonly abilityScores: IAbilityScores;
    readonly description?: string;
}

const CharacterSheetSchema: Schema = new Schema({
    name: { type: String, required: true },
    abilityScores: { type: Schema.Types.ObjectId, required: true },
    description: { type: String, required: false }
});

export default mongoose.model<ICharacterSheet>('CharacterSheet', CharacterSheetSchema);