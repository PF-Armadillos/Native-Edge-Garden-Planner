const request = require('supertest');
const testServer = require('../server/server');
const puppeteer = require('puppeteer');

//Test case for Sign Up
describe('Frontend & Backend Sign up integration tests', () => {
  // Backend
  describe('User signup response with 200 status', () => {
    afterAll(() => {
      testServer.close(); // Close the test server after backend tests
    });

    it('should create a user and return a success message', async () => {
      const testUserData = { username: 'testuser', password: 'password123' };
      const response = await request(testServer)
        .post('/user/signup')
        .send(testUserData)
        .expect(200)
        .expect('Content-Type', /json/);

      expect(response.body).toEqual({
        message: 'User created successfully',
      });
    });
  });

  // Frontend
  describe('Signup form testing', () => {
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: true, //Use 'true' once finished
      });
      page = await browser.newPage();
    });

    afterAll(async () => {
      await browser.close();
    });

    it('allows user to sign up', async () => {
      await page.goto('http://localhost:3000/SignUp', {
        waitUntil: 'networkidle0',
      });

      await page.type('#username', 'testuser');
      await page.type('#password', 'password123');

      /**
       * @see https://pptr.dev/api/puppeteer.page.click
       */
      // Submit the form by clicking the submit button
      await page.click('button[type="submit"]');

      // Wait for React Router to complete the navigation
      await page.waitForFunction(
        (url) => window.location.href.includes(url),
        {},
        '/CreateGarden'
      );

      expect(page.url()).toContain('/CreateGarden');
    });
  });
});

//Test case for Login
describe('Frontend & Backend Login integration tests', () => {
  // Backend
  describe('User login response with 200 status', () => {
    afterAll(() => {
      testServer.close(); // Close the test server after backend tests
    });

    it('should allow user to login', async () => {
      const testUserData = { username: 'testuser', password: 'password123' };
      const response = await request(testServer)
        .post('/user/login')
        .send(testUserData)
        .expect(200)
        .expect('Content-Type', /json/);

      //[Finish this part once the user login backend setup]
      // expect(response.body).toEqual({
      //   // username or userId, depends on the backend
      // });
    });
  });

  // Frontend
  describe('Login form testing', () => {
    let browser;
    let page;

    beforeAll(async () => {
      browser = await puppeteer.launch({
        headless: true, //Use 'true' once finished
      });
      page = await browser.newPage();
    });

    afterAll(async () => {
      await browser.close();
    });

    it('allows user to log in', async () => {
      await page.goto('http://localhost:3000/', {
        waitUntil: 'networkidle0',
      });

      await page.type('#username', 'testuser');
      await page.type('#password', 'password123');

      // Submit the form by clicking the submit button
      await page.click('button[type="submit"]');

      // Wait for React Router to complete the navigation
      await page.waitForFunction(
        (url) => window.location.href.includes(url),
        {},
        '/CreateGarden'
      );

      expect(page.url()).toContain('/CreateGarden');
    });
  });
});
