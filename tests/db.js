
const mockingoose = require('mockingoose');

const UserModel = require('../server/models/userModel.js');


const request = require('supertest');
const server = require('../server/server')



describe('DB tests for UserModel', () => {

  it('should return document based on findOne method', async () => {
    //pseudo document
    const _doc = [{
        username: 'Aissata',
        password: '123'
      },
      {
        username: 'devil',
        password: 'chicken'
      }
    ];
    
    //wrap model in mockinggoose and use toReturn to pass in document and operation to use on model
    mockingoose(UserModel).toReturn(_doc, 'findOne');
        
    const result = await UserModel.findById({username: 'Aissata'});
    console.log(result);
    expect(result[0].username).toBe('Aissata');
  });
 
});

describe('User Route tests', () => {

  afterAll((done) => {
      server.close(done);
  }); //closes the port after tests are run
 
      describe('POST to /user/signup', () => {
          it('responds with 200 status and a json content type', async () => {
              await request(server)
                .post('/user/signup')
                .expect('Content-Type', /json/)
                .expect(200);
          });
      });
  
 
      describe('POST to /user/login', () => {
        it('responds with 200 status and a json content type', async () => {
            await request(server)
              .post('/user/login')
              .expect('Content-Type', /json/)
              .expect(200);
        });
    });



});