const request = require('supertest');
const mockingoose = require('mockingoose');
const User = require('../server/models/userModel');
const server = require('../server/server')
const bcrypt = require('bcryptjs');

