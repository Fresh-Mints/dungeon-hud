import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterSheetModule } from './character-sheet/character-sheet.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    CharacterSheetModule,
    MongooseModule.forRoot('mongodb://localhost:27017/dungeonhud')],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
