import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsResolver } from './events.resolver';

@Module({
    providers: [EventsGateway, EventsResolver],
})
export class EventsModule {}