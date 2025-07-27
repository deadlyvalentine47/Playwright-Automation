// @ts-check
const { defineConfig, devices } = require('@playwright/test');
// import { defineConfig, devices } from '@playwright/test'

require('dotenv').config();

module.exports = defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000
  },
  fullyParallel: true,
  reporter: [
    ['html', { outputFolder: 'reports', open: 'never' }],
    // ['junit', { outputFile: 'test-results/junit.xml' }]
  ],
  use: {
    baseURL: process.env.SWIGGY_URL,
    trace: 'retain-on-failure',
    screenshot: 'on', // Take screenshot on pass, fail, and via code
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'Firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'WebKit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
  outputDir: 'screenshots', // For artifacts like screenshots
  // CI/CD specific settings
  workers: process.env.CI ? 1 : undefined,
  retries: process.env.CI ? 2 : 0,
});
