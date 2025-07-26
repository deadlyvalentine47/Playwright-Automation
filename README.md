# Playwright Automation for Swiggy

## Overview
This project provides a robust Playwright automation framework for testing Swiggy (and other web apps) with support for:
- Dynamic test data
- Multi-browser execution
- Environment variable management
- ESLint integration
- HTML reports and screenshots
- Modular, maintainable structure

## Project Structure
```
├── data/           # Test data files (JSON/JS)
├── reports/        # Playwright HTML reports
├── screenshots/    # Screenshots from test runs
├── tests/          # Playwright test files
├── utils/          # Utility/helper modules
├── .env            # Environment variables
├── playwright.config.js # Playwright configuration
├── package.json    # NPM scripts and dependencies
```

## Setup
1. **Clone the repository**
2. **Install dependencies**
   ```bash
   npm install
   ```
3. **Install Playwright browsers** (if not already installed)
   ```bash
   npx playwright install
   ```
4. **Set up environment variables**
   - Create a `.env` file in the root directory:
     ```env
     SWIGGY_URL=https://www.swiggy.com/
     # Add more URLs as needed
     ```

## Usage
### Run all tests (using config reporters and browsers)
```bash
npx playwright test # runs test in background
npx playwright test --headed # for opening browser and running the test
```

### Run tests in a specific browser
```bash
npx playwright test --project=Chromium
npx playwright test --project=Firefox
```

### View HTML Report
```bash
npx playwright show-report reports
```

### Lint and Auto-fix Code
```bash
npm run lint
npm run lint:fix
```

## Dynamic Test Data
- Store your test data in the `data/` directory as JSON or JS files.
- Use the `DataHelper` utility to load and access data in your tests:
  ```js
  const DataHelper = require('../utils/dataHelper');
  const loginData = new DataHelper('data/swiggy/loginData.json');
  const username = loginData.get('userName');
  ```

## Screenshots & Reports
- Screenshots are saved in the `screenshots/` directory for each test (on pass, fail, or on demand).
- HTML reports are generated in the `reports/` directory after each run.

## Contributing
1. Fork the repository
2. Create a new branch for your feature or bugfix
3. Make your changes and add tests
4. Run linting and ensure all tests pass
5. Submit a pull request

## License
[ISC](LICENSE) 