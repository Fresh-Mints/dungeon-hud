import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbilityScoreModule } from './ability-score/ability-score.module';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { join } from 'path';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dungeonhud', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: true,
      autoIndex: true,
    }),
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
    }),
    CharacterSheetModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
