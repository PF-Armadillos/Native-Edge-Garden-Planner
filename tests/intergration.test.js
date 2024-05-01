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
        headless: false, //Use 'true' once finished
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
      const [response] = await Promise.all([
        page.click('button[type="submit"]'),
        page.waitForNavigation(), //if multiple button element, it will only click the first one
      ]);

      expect(page.url()).toContain('/CreateGarden');
    });
  });
});
