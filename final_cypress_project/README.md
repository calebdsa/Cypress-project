# Cypress Automation Framework

Enhanced Cypress automation framework with Page Object Model (POM) pattern and enterprise-level architecture.

## 📋 Table of Contents

- [Architecture Overview](#architecture-overview)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Running Tests](#running-tests)
- [Configuration](#configuration)
- [Best Practices](#best-practices)
- [Contributing](#contributing)

## 🏗️ Architecture Overview

This framework follows a **layered architecture** pattern with clear separation of concerns:

### Architecture Layers

1. **Test Layer** (`cypress/e2e/`)
   - Test specifications
   - Test data usage
   - Test execution logic

2. **Page Object Layer** (`cypress/pages/`)
   - Page object classes
   - Page-specific actions and assertions
   - Encapsulates page elements and behaviors

3. **Base Layer** (`cypress/support/base/`)
   - BasePage class with common functionality
   - Reusable page object methods

4. **Utilities Layer** (`cypress/utils/`)
   - Helper functions
   - Test data generators
   - Assertion utilities

5. **Configuration Layer** (`cypress/config/`)
   - Environment configurations
   - Test configuration management

6. **Data Layer** (`cypress/fixtures/`)
   - Static test data
   - JSON fixtures for test scenarios

### Design Patterns

- **Page Object Model (POM)**: Encapsulates page-specific logic
- **Inheritance**: Page objects extend BasePage for common functionality
- **Data-Driven Testing**: Uses fixtures and generators for test data
- **Separation of Concerns**: Clear boundaries between layers

## 📁 Project Structure

```
cypress-project/
├── cypress/
│   ├── config/
│   │   └── environments.js          # Environment configurations
│   ├── e2e/
│   │   ├── login.cy.js              # Login test specs
│   │   ├── register.cy.js           # Registration test specs
│   │   ├── shopping.cy.js           # Shopping test specs
│   │   └── contact.cy.js            # Contact form test specs
│   ├── fixtures/
│   │   └── testUsers.json           # Test data fixtures
│   ├── pages/
│   │   ├── LoginPage.js             # Login page object
│   │   ├── RegisterPage.js          # Registration page object
│   │   ├── ShoppingPage.js          # Shopping page object
│   │   └── ContactUsPage.js         # Contact page object
│   ├── support/
│   │   ├── base/
│   │   │   └── BasePage.js          # Base page class
│   │   ├── commands.js              # Custom Cypress commands
│   │   └── e2e.js                   # Support file (hooks, imports)
│   └── utils/
│       ├── testDataGenerator.js     # Test data generators
│       └── assertions.js            # Custom assertions
├── cypress.config.js                # Cypress configuration
├── package.json                     # Project dependencies and scripts
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v8 or higher)

### Installation

1. Clone the repository
2. Navigate to the project directory:
   ```bash
   cd final_cypress_project
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## 🧪 Running Tests

### Interactive Mode (Cypress Test Runner)

```bash
npm run test:open
```

### Headless Mode

```bash
npm run test:headless
```

### Run Specific Test Files

```bash
# Run login tests
npm run test:login

# Run registration tests
npm run test:register

# Run shopping tests
npm run test:shopping

# Run contact tests
npm run test:contact
```

### Run Tests in Specific Browser

```bash
# Chrome
npm run test:chrome

# Firefox
npm run test:firefox

# Edge
npm run test:edge
```

### Run Tests for Specific Environment

```bash
# Development environment
npm run test:dev

# Staging environment
npm run test:staging

# Production environment
npm run test:prod
```

## ⚙️ Configuration

### Environment Configuration

Environments are configured in `cypress/config/environments.js`:

```javascript
const environments = {
  dev: {
    baseUrl: 'https://automationteststore.com/',
    apiUrl: 'https://automationteststore.com/api/',
    timeout: 10000,
  },
  staging: { ... },
  production: { ... }
};
```

Set environment using:
```bash
CYPRESS_ENV=dev npm test
```

### Cypress Configuration

Main configuration is in `cypress.config.js`:
- Base URL
- Timeouts
- Retry logic
- Video/Screenshot settings
- Viewport settings

## 📝 Writing Tests

### Using Page Objects

```javascript
const LoginPage = require('../pages/LoginPage');

describe('Login Tests', () => {
  let loginPage;

  beforeEach(() => {
    loginPage = new LoginPage();
  });

  it('should login successfully', () => {
    loginPage
      .visit()
      .login('username', 'password');
  });
});
```

### Using Test Data

```javascript
// Using fixtures
cy.fixture('testUsers').then((users) => {
  loginPage.login(users.validUser.loginname, users.validUser.password);
});

// Using data generators
const { generateUserData } = require('../utils/testDataGenerator');
const userData = generateUserData();
```

### Custom Commands

```javascript
// Login command
cy.login('username', 'password');

// Wait and assert visible
cy.waitAndAssertVisible('.selector');

// Clear and type
cy.clearAndType('#input', 'text');
```

## 🎯 Best Practices

1. **Page Object Model**: Always use page objects, never access selectors directly in tests
2. **Reusability**: Use BasePage for common functionality
3. **Test Data**: Use fixtures for static data, generators for dynamic data
4. **Selectors**: Store selectors in page objects, not in tests
5. **Assertions**: Use meaningful assertions and verify expected outcomes
6. **Test Isolation**: Each test should be independent and able to run alone
7. **Error Handling**: Implement proper error handling and validation
8. **Documentation**: Document complex logic and page objects

## 🔧 Custom Commands

The framework includes several custom commands:

- `cy.login(loginname, password)` - Login user
- `cy.waitAndAssertVisible(selector)` - Wait and assert element is visible
- `cy.clearAndType(selector, text)` - Clear and type text
- `cy.selectDropdownOption(selector, optionText)` - Select dropdown option
- `cy.urlShouldContain(text)` - Verify URL contains text
- `cy.takeTimestampedScreenshot(name)` - Take screenshot with timestamp

## 📊 Test Execution Reports

- Videos are saved in `cypress/videos/`
- Screenshots are saved in `cypress/screenshots/`
- Configure report generation as needed

## 🔄 CI/CD Integration

The framework includes GitHub Actions workflow (`.github/workflows/main.yml`):
- Scheduled daily runs
- Manual trigger support
- Artifact uploads for videos and screenshots

## 🤝 Contributing

1. Follow the existing code structure
2. Write meaningful test descriptions
3. Use page objects for all page interactions
4. Add fixtures for test data
5. Update documentation as needed

## 📚 Additional Resources

- [Cypress Documentation](https://docs.cypress.io/)
- [Page Object Model Pattern](https://www.selenium.dev/documentation/test_practices/encouraged/page_object_models/)
- [Best Practices Guide](https://docs.cypress.io/guides/references/best-practices)

## 📄 License

ISC
