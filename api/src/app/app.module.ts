import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AbilityScoreModule } from '../ability-score/ability-score.module';
import { CharacterSheetModule } from '../character-sheet/character-sheet.module';
import { join } from 'path';
import { LoggingPlugin } from './app.plugin';
import { AuthModule } from 'src/auth/auth.module';
import { UserModule } from 'src/user/user.module';
import { EventsModule } from 'src/events/events.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/dungeonhud', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      autoCreate: true,
      autoIndex: true,
    }),
    GraphQLModule.forRoot({
      context: ({req, connection }) => connection ? { req: connection.context } : { req },
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: true,
      installSubscriptionHandlers: true,
      subscriptions: {
        keepAlive: 5000,
      }
    }),
    AuthModule,
    CharacterSheetModule,
    UserModule,
    EventsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
