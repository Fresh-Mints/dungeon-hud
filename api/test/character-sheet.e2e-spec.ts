import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { CharacterSheetModule } from '../src/character-sheet/character-sheet.module';
import { MongooseModule } from '@nestjs/mongoose';
import { GraphQLModule } from '@nestjs/graphql';
import { CharacterSheet } from '../src/character-sheet/interfaces/character-sheet.interface';

describe('CharacterSheetController (e2e)', () => {
    let app;

    beforeAll(async () => {
        const moduleFixture: TestingModule = await Test.createTestingModule({
        imports: [
            CharacterSheetModule,
            MongooseModule.forRoot('mongodb://localhost:27017/dungeonhudtest'),
            GraphQLModule.forRoot({
                autoSchemaFile: 'schema.gql',
            }),
        ],
        }).compile();

        app = moduleFixture.createNestApplication();
        await app.init();
    });

    afterAll(async () => {
        await app.close();
    });

    //Create Character Sheet
    const characterSheet: CharacterSheet = {
        name: 'Jerry',
        abilityScores: [
            {
                name: 'Strength',
                number: 10
            },
            {
                name: 'Dexterity',
                number: 11
            },
            {
                name: 'Constitution',
                number: 12
            },
            {   
                name: 'Intelligence',
                number: 13
            },
            {   
                name: 'Wisdom',
                number: 14
            },            
            {   
                name: 'Charisma',
                number: 15
            },
        ],
        description: 'Jerry was a young golem born out of the efforts of one Stijn Renfield and one mysterious elven Artificer whose name immediately escaped Stijn.'
    };

    let id: string;

    const createCharacterSheetObject = JSON.stringify(characterSheet).replace(
        /\"([^(\")"]+)\":/g,
        '$1:',
    );

    const createCharacterSheetQuery = `
    mutation {
        createCharacterSheet(input: ${createCharacterSheetObject}) {
            name
            abilityScores
            description
            id
        }
    }`
    
    it('createCharacterSheet', () => {
        return request(app.getHttpServer())
        .post('/graphql')
        .send({
            operationName: null,
            query: createCharacterSheetQuery,
        })
        .expect(({ body }) => {
            const data = body.data.createCharacterSheet;
            id = data.id;
            expect(data.name).toBe(characterSheet.name);
            expect(data.abilityScores).toBe(characterSheet.abilityScores);
            expect(data.description).toBe(characterSheet.description);
        })
        .expect(200);
    })

    // Updated Character Sheet
    const updatedCharacterSheet: CharacterSheet = {
        name: 'Jerry 2.0',
        abilityScores: [
            {
                name: 'Strength',
                number: 15
            },
            {
                name: 'Dexterity',
                number: 14
            },
            {
                name: 'Constitution',
                number: 13
            },
            {   
                name: 'Intelligence',
                number: 12
            },
            {   
                name: 'Wisdom',
                number: 11
            },            
            {   
                name: 'Charisma',
                number: 10
            },
        ],
        description: 'Jerry is now a sorcerer'
    };

    const updateCharacterSheetObject = JSON.stringify(updatedCharacterSheet).replace(
        /\"([^(\")"]+)\":/g,
        '$1:',    
    );

    it('updateCharacterSheet', () => {
        const updateCharacterSheetQuery = `
        mutation {
            updateCharacterSheet(id: "${id}", input: ${updateCharacterSheetObject}) {
                name
                abilityScores
                description
                id
            }
        }`;

        return request(app.getHttpServer())
            .post('/graphql')
            .send({
                operationName: null,
                query: updateCharacterSheetQuery,
            })
            .expect(({ body }) => {
                const data = body.data.updateCharacterSheet;
                expect(data.name).toBe(updatedCharacterSheet.name);
                expect(data.abilityScores).toBe(updatedCharacterSheet.abilityScores);
                expect(data.description).toBe(updatedCharacterSheet.description);
            })
            .expect(200);
    });
    
    it('deleteCharacterSheet', () => {
        const deleteCharacterSheetQuery = `
            mutation {
                deleteCharacterSheet(id: '${id}') {
                    name
                    abilityScores
                    description
                    id
                }
            }`;
        
        return request(app.getHttpServer())
        .post('/graphql')
        .send({
            operationName: null,
            query: deleteCharacterSheetQuery,
        })
        .expect(({ body }) => {
            const data = body.data.deleteCharacterSheet;
            expect(data.name).toBe(updatedCharacterSheet.name);
            expect(data.abilityScores).toBe(updatedCharacterSheet.abilityScores);
            expect(data.description).toBe(updatedCharacterSheet.description);
        })
        .expect(200);
    })
});