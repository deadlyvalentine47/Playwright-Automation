# CI/CD Integration Setup

This document explains how to set up CI/CD integration for your Playwright automation project.

## Available CI/CD Configurations

### 1. GitHub Actions
- **File**: `.github/workflows/playwright.yml`
- **Features**:
  - Runs on push to main/develop branches
  - Runs on pull requests
  - Parallel test execution with sharding
  - Artifact upload for reports and screenshots
  - Separate job for Chromium-only testing on PRs

**Setup**:
1. Push your code to GitHub
2. Go to Settings > Actions > General
3. Enable Actions for your repository
4. The workflow will automatically run on pushes/PRs

### 2. Jenkins Pipeline
- **File**: `Jenkinsfile`
- **Features**:
  - Multi-stage pipeline
  - Parallel browser testing
  - HTML report publishing
  - Artifact archiving

**Setup**:
1. Install Jenkins with NodeJS plugin
2. Create a new pipeline job
3. Point to your repository
4. Configure NodeJS tool in Jenkins

### 3. GitLab CI/CD
- **File**: `.gitlab-ci.yml`
- **Features**:
  - Multi-stage pipeline
  - Docker-based execution
  - Parallel browser testing
  - JUnit report integration

**Setup**:
1. Push to GitLab repository
2. CI/CD will automatically run
3. View results in GitLab CI/CD interface

### 4. Azure DevOps
- **File**: `azure-pipelines.yml`
- **Features**:
  - Multi-stage pipeline
  - Test result publishing
  - Artifact publishing
  - JUnit integration

**Setup**:
1. Create Azure DevOps project
2. Create new pipeline
3. Point to your repository
4. Pipeline will run automatically

## Environment Variables

Set these in your CI/CD platform:

```bash
SWIGGY_URL=https://www.swiggy.com/
# Add other environment variables as needed
```

## CI/CD Optimizations

### Playwright Config Updates
- Added JUnit reporter for CI integration
- Optimized workers and retries for CI environments
- Screenshots and videos on failure

### Best Practices
1. **Use `npm ci` instead of `npm install`** for faster, reliable builds
2. **Install browsers with `--with-deps`** for all dependencies
3. **Run tests in parallel** when possible
4. **Upload artifacts** for debugging failed tests
5. **Use Docker images** with pre-installed browsers for faster builds

## Running Different Test Suites in CI/CD

You can modify the CI/CD files to run specific test suites:

```bash
# Run only login tests
npx playwright test tests/swiggy-login.spec.js

# Run by group name
npx playwright test -g "Swiggy Login Suite"

# Run smoke tests
npx playwright test tests/smoke/*.spec.js
```

## Troubleshooting

### Common Issues
1. **Browser installation fails**: Use `--with-deps` flag
2. **Tests timeout**: Increase timeout in config
3. **Memory issues**: Reduce workers in CI
4. **Screenshots not generated**: Check outputDir configuration

### Debug Commands
```bash
# Run with debug output
npx playwright test --debug

# Run with headed browser
npx playwright test --headed

# Run with trace
npx playwright test --trace on
```

## Next Steps

1. Choose your preferred CI/CD platform
2. Set up the configuration file
3. Configure environment variables
4. Test the pipeline
5. Set up notifications for test results 