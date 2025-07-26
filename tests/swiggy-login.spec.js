const { test, expect } = require('@playwright/test');
const { getTestData } = require('../utils/dataProvider');
require('dotenv').config();

const loginDataArray = getTestData('testdata/swiggy/loginData.json');

test.describe('Swiggy Login Suite', () => {
  loginDataArray.forEach((loginData) => {
    test(`${loginData.testCaseId}`, async ({ page }) => {
      await page.goto(process.env.SWIGGY_URL);
      // Now you can access loginData.userName, loginData.password, loginData.role, etc.
      console.log('Username:', loginData.userName);
      console.log('Password:', loginData.password);
      console.log('Role:', loginData.role);
      // ... your test logic here ...
      await expect(page).toHaveTitle(/Swiggy/i);
    });
  });
}); 