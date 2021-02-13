import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CharacterSheetType } from './dto/create-character-sheet.dto';
import { CharacterSheet } from './interfaces/character-sheet.interface';
import { CharacterSheetInput } from './input-character-sheet.input';

@Injectable()
export class CharacterSheetService {
    constructor(@InjectModel('CharacterSheet') private characterSheetModel: Model<CharacterSheet>) {}

    async create(createCharacterSheetDto: CharacterSheetInput): Promise<CharacterSheetType> {
        const createdCharacterSheet = new this.characterSheetModel(createCharacterSheetDto);
        return await createdCharacterSheet.save();
    }

    async findAll(): Promise<CharacterSheetType[]> {
        return await this.characterSheetModel.find().exec();
    }

    async findOne(id: string): Promise<CharacterSheetType> {
        return await this.characterSheetModel.findOne({ _id: id });
    }

    async delete(id: string): Promise<CharacterSheetType> {
        return await this.characterSheetModel.findByIdAndRemove(id);
    }
    
    async update(id: string, characterSheet: CharacterSheetInput): Promise<CharacterSheetType> {
        return await this.characterSheetModel.findByIdAndUpdate(id, characterSheet, { new: true });
    }
};