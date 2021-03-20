import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { AbilityScoreDocument, AbilityScores } from './ability-score.model';
import {
    CreateAbilityScoreInput
} from './dto';

@Injectable()
export class AbilityScoreService {
    constructor(
        @InjectModel(AbilityScores.name) private abilityScoresModel: Model<AbilityScoreDocument>,
    ) {}
    
    getById(_id: Types.ObjectId) {
        return this.abilityScoresModel.findById(_id).exec();
    }

    create(payload: CreateAbilityScoreInput) {
        const createdAbilityScore = new this.abilityScoresModel(payload);
        return createdAbilityScore.save();
    }
}