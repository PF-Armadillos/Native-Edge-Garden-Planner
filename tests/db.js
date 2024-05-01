
const mockingoose = require('mockingoose');

const UserModel = require('../server/models/userModel.js');
const {createUser, findUser} = require('../server/controllers/userController.js');

describe('DB mongoose test for UserModel', () => {

  it('should return document based on findOne method', () => {
    //pseudo document
    const _doc = 
    {
    username: 'Aissata',
    password: '123'
    };
    
    //wrap model in mockinggoose and use toReturn to specify 
    mockingoose(UserModel).toReturn(_doc, 'findOne');
    
    let results;

    UserModel.findOne({firstName: 'Aissata'})
    .then(foundUser => 
      {results=foundUser
        expect(results[0].firstName).toBe('Aissata')
      })
    .catch(err =>  {
      console.log(err);     
    });    
  });


  // it('should return the doc with findById', () => {
  //   const _doc = 
  //   {
  //   username: 'Aissata',
  //   password: '123'
  //   };
    
  //   //wrap model in mockinggoose and 
  //   mockingoose(UserModel).toReturn(_doc, 'findOne');

  //   return UserModel.findById({ _id: 'Aissata' }).then(doc => {
  //     expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
  //   });
  // });
  





  // it('should return the doc with update', () => {
  //   const _doc = {
  //     _id: '507f191e810c19729de860ea',
  //     name: 'name',
  //     email: 'name@email.com',
  //   };

  //   mockingoose(UserModel).toReturn(_doc, 'update');

  //   return UserModel
  //     .update({ name: 'changed' }) // this won't really change anything
  //     .where({ _id: '507f191e810c19729de860ea' })
  //     .then(doc => {
  //       expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc);
  //     });
  // });

  // it('should return multiple docs', () => {
  //   const _doc = [
  //     {
  //     username: 'Aissata',
  //     password: '123'
  //     },
  //     {
  //       username: 'Devil',
  //       password: 'Chicken'
  //     }
  //   ];

  //   //wrap model with mockinggoose
  //   mockingoose(UserModel).toReturn(_doc, 'findOne');

  //   return UserModel.findById({ _id: 'Aissata' }).then(doc => {
  //     expect(JSON.parse(JSON.stringify(doc))).toMatchObject(_doc[0]);
  //   });
  // });

});