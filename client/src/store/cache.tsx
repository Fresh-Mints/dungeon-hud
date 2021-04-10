import { InMemoryCache } from '@apollo/client';
import { characterVar } from './characterSheet/model';
import { userVar } from './User/model';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                characterSheet: {
                    read() {
                        return characterVar
                    }
                },
                user: {
                    read() {
                        return userVar
                    }
                }
            }
        }
    }
})