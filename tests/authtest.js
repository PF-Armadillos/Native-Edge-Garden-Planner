const request = require('supertest');
const mockingoose = require('mockingoose');
const User = require('../server/models/userModel');
const server = require('../server/server')
const bcrypt = require('bcryptjs');
const mongoose = require('mongoose');

describe('Authentication with Bcrypt and Login', () => {
    
    afterAll((done) => {
        server.close(done);
    });

    describe('POST to User Login ', () => {
        beforeEach(() => {
            mockingoose(User).reset();
        });

        const mockhash = bcrypt.hashSync('password123', 10);
        const mockUser = {
            username: 'chicken',
            password: mockhash,
            validatePassword: function(password) {
                return bcrypt.compare(password, this.password);
            }
        };

        it('should log in if bcrypt password matches', async () => {
            mockingoose(User).toReturn(mockUser, 'findOne');
            const res = await request(server)
            .post('/user/login')
            .send({
                username: 'chicken',
                password: 'password123'
            })
            .expect(200)
            
            expect(res.body).toHaveProperty('username', 'chicken') //to have property key value pair 
        })
        
        it('should give 401 error and message if username is incorrect', async () => {
            mockingoose(User).toReturn(null, 'findOne');
            const res = await request(server)
            .post('/user/login')
            .send({
                username: 'chiken',
                password: 'password123'
            })
            .expect(401)

            expect(res.body).toEqual({ message: 'Authentication failed: User not found '})
        })

        it('should give 401 error and message if password is incorrect', async () => {
            mockingoose(User).toReturn(mockUser, 'findOne');
            const res = await request(server)
            .post('/user/login')
            .send({
                username: 'chicken',
                password: '123'
            })
            .expect(401)

            expect(res.body).toEqual({ message: 'Authentication failed: Incorrect password '})
        })
    })
})
