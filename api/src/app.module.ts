import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { schema } from './models';
import { CharacterSheetModule } from './modules/character-sheet.module'
import { AbilityScoresModule } from './modules/ability-scores.module'

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dungeonhud', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: true,
      autoIndex: true,
      useMongoClient: true,
    }),
    GraphQLModule.forRoot({
      schema: schema,
      playground: true,
    }),
    CharacterSheetModule,
    AbilityScoresModule,
  ],
})
export class AppModule {}
