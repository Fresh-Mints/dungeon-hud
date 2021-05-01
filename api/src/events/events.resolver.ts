import { Resolver, Query, Mutation, Args, Int, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

const pubSub = new PubSub();

@Resolver(() => String)
export class EventsResolver {

    @Subscription(() => String)
    testSubscription() {
        return 'test'
    }
}