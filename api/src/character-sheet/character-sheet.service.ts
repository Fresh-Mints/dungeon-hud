import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Types } from 'mongoose';

import { CharacterSheet, CharacterSheetDocument } from './character-sheet.model';
import {
    CreateCharacterSheetInput,
    UpdateCharacterSheetInput,
} from './dto';

@Injectable()
export class CharacterSheetService {
    constructor(
        @InjectModel(CharacterSheet.name) private characterSheetModel: Model<CharacterSheetDocument>,
    ) {}

    findOneSheetById(_id: Types.ObjectId) {
        return this.characterSheetModel.findById(_id).exec();
    }

    findManySheetsByUser(user: string) {
        return this.characterSheetModel.find({user: user }).exec();
    }

    create(createCharacterSheetInput: CreateCharacterSheetInput) {
        const createdCharacterSheet = new this.characterSheetModel(createCharacterSheetInput);
        return createdCharacterSheet.save();
    }

    update(updateInp:UpdateCharacterSheetInput) {
        return this.characterSheetModel.findOneAndUpdate(updateInp._id, updateInp).exec();
    }
}
