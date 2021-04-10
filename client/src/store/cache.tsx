import { InMemoryCache } from '@apollo/client';
import { characterVar } from './CharacterSheet';
import { userVar } from './User';

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