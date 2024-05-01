const request = require('supertest');
const mockingoose = require('mockingoose');
const Plant = require('../server/models/plantModel');
const server = require('../server/server')

describe('Route integration', () => {
    let test;
    beforeAll((done) => {
        test = server.listen(0, done);
    });

    afterAll((done) => {
        test.close(done);
    });

    describe('/', () => {
        describe('GET', () => {
            it('responds with 200 status and a text/html content type', async () => {
                await request(server)
                  .get('/')
                  .expect('Content-Type', /text\/html/)
                  .expect(200);
            });
        });
    });

    describe('Mock Plant Schema Test', () => {
        beforeEach(() => {
            jest.clearAllMocks(); // clear every mock
            mockingoose(Plant).reset(); // reset mock for Plant
        })
        
        const mockdb = {
            _id: '662fbb7713277adf58aeef59',
            State: 'New York',
            CommonName: 'Scarlet Oak',
        };

        it ('should find a plant based on state and return obj', async () => { 
            mockingoose(Plant).toReturn(mockdb, 'findOne');
            const result = await Plant.findOne({ State: 'New York' });
            expect(result).toMatchObject(mockdb);
            
        })
        it('should find a plant based on the state inputed and return common name', async () => {
            mockingoose(Plant).toReturn(mockdb, 'findOne');
            const result = await Plant.findOne({ State: 'New York' });
            expect(result.CommonName).toBe(mockdb.CommonName)
        });
    });

    describe('/plant', () => {
            const mockPlants = [{
                _id: '662fbb7813277adf58aeef72',
                State: 'New York',
                CommonName: 'Nannyberry',
              },
              {
                _id: '662fbb7813277adf58aeef73',
                State: 'New York',
                CommonName: 'Birdfoot Violet',
              }]

            beforeEach(() => {
                mockingoose(Plant).toReturn(mockPlants, 'find');
            });

        it('responds with a list of plants based on state query', async () => {
            const response = await request(server)
            .get('/plant?location=New York')
            .expect(200)
            .expect('Content-Type', /application\/json/);

            expect(response.body).toEqual(mockPlants);
        }, 12000);      
        });
    });