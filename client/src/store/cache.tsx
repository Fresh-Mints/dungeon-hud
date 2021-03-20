import { InMemoryCache } from '@apollo/client';
import { characterVar } from './CharacterSheet';

export const cache: InMemoryCache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                characterSheet: {
                    read() {
                        return characterVar
                    }
                }
            }
        }
    }
})