# Architecture Documentation

## Overview

This document describes the architectural decisions and patterns used in the Cypress automation framework.

## Architecture Principles

1. **Separation of Concerns**: Each layer has a specific responsibility
2. **DRY (Don't Repeat Yourself)**: Reusable components and utilities
3. **Maintainability**: Easy to update and extend
4. **Scalability**: Can handle growing test suite
5. **Testability**: Clear structure for writing tests

## Layer Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    TEST LAYER                            │
│  (cypress/e2e/*.cy.js)                                  │
│  - Test specifications                                   │
│  - Test execution logic                                  │
│  - Test data usage                                       │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                PAGE OBJECT LAYER                         │
│  (cypress/pages/*.js)                                   │
│  - Page-specific actions                                 │
│  - Page element selectors                                │
│  - Page assertions                                       │
└──────────────────────┬──────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────┐
│                   BASE LAYER                             │
│  (cypress/support/base/BasePage.js)                     │
│  - Common page functionality                             │
│  - Reusable methods                                      │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                UTILITIES LAYER                           │
│  (cypress/utils/)                                       │
│  - Test data generators                                  │
│  - Helper functions                                      │
│  - Custom assertions                                     │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│              CONFIGURATION LAYER                         │
│  (cypress/config/)                                      │
│  - Environment configs                                   │
│  - Test settings                                         │
└─────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────┐
│                   DATA LAYER                             │
│  (cypress/fixtures/)                                    │
│  - Static test data                                      │
│  - JSON fixtures                                         │
└─────────────────────────────────────────────────────────┘
```

## Design Patterns

### 1. Page Object Model (POM)

**Purpose**: Encapsulate page-specific logic and elements

**Implementation**:
- Each page has its own class
- Selectors are stored as properties
- Methods represent page actions
- Fluent interface pattern for method chaining

**Example**:
```javascript
class LoginPage extends BasePage {
  selectors = {
    loginnameInput: '#loginFrm_loginname',
    passwordInput: '#loginFrm_password',
  };

  login(loginname, password) {
    this.enterLoginName(loginname);
    this.enterPassword(password);
    this.submit();
    return this; // Fluent interface
  }
}
```

### 2. Inheritance Pattern

**Purpose**: Reuse common functionality

**Implementation**:
- BasePage class provides common methods
- Page objects extend BasePage
- Reduces code duplication

**Benefits**:
- Consistent API across pages
- Centralized common functionality
- Easier maintenance

### 3. Factory Pattern (Implicit)

**Purpose**: Create page object instances

**Implementation**:
- Tests instantiate page objects: `new LoginPage()`
- Allows multiple instances if needed
- No singleton pattern (better for parallel execution)

### 4. Data-Driven Testing

**Purpose**: Separate test data from test logic

**Implementation**:
- Fixtures for static data
- Generators for dynamic data
- Test data loaded at runtime

**Example**:
```javascript
// Static data
cy.fixture('testUsers').then((users) => {
  loginPage.login(users.validUser.loginname, users.validUser.password);
});

// Dynamic data
const userData = generateUserData();
```

## Component Details

### BasePage Class

**Responsibilities**:
- Common page actions (visit, click, type, etc.)
- Element interaction utilities
- Page load handling
- Screenshot utilities

**Methods**:
- `visit(path)` - Navigate to page
- `getElement(selector)` - Get element with timeout
- `clickElement(selector)` - Click element
- `typeText(selector, text)` - Type text
- `waitForElement(selector)` - Wait for element visibility
- `urlShouldContain(text)` - Verify URL

### Page Objects

**Responsibilities**:
- Page-specific selectors
- Page-specific actions
- Page-specific assertions
- Encapsulate page behavior

**Pattern**:
- Extend BasePage
- Store selectors as object property
- Methods return `this` for chaining
- Clear method names

### Custom Commands

**Purpose**: Extend Cypress functionality

**Commands**:
- `cy.login()` - Quick login
- `cy.waitAndAssertVisible()` - Wait and verify
- `cy.clearAndType()` - Clear and type
- `cy.selectDropdownOption()` - Select dropdown
- `cy.urlShouldContain()` - Verify URL

### Configuration Management

**Approach**: Environment-based configuration

**Structure**:
- `cypress/config/environments.js` - Environment configs
- `cypress.config.js` - Cypress settings
- Environment variables for runtime config

**Environments**:
- dev
- staging
- production

### Test Data Management

**Approaches**:

1. **Fixtures** (`cypress/fixtures/`)
   - Static test data
   - JSON format
   - Loaded with `cy.fixture()`

2. **Data Generators** (`cypress/utils/testDataGenerator.js`)
   - Dynamic test data
   - Unique data generation
   - Utility functions

## Data Flow

```
Test File
  │
  ├─► Load Page Object
  │     │
  │     └─► Extends BasePage
  │
  ├─► Load Test Data
  │     ├─► From Fixtures (static)
  │     └─► From Generators (dynamic)
  │
  ├─► Execute Test
  │     │
  │     ├─► Page Object Methods
  │     │     │
  │     │     └─► BasePage Methods
  │     │           │
  │     │           └─► Cypress Commands
  │     │
  │     └─► Custom Commands
  │           │
  │           └─► Cypress Commands
  │
  └─► Assertions
        │
        └─► Cypress Assertions / Custom Assertions
```

## Benefits of This Architecture

1. **Maintainability**
   - Clear separation of concerns
   - Easy to locate code
   - Changes isolated to specific layers

2. **Reusability**
   - BasePage methods reusable across pages
   - Utilities can be used anywhere
   - Test data reusable

3. **Scalability**
   - Easy to add new pages
   - Easy to add new tests
   - Can handle large test suites

4. **Testability**
   - Clear test structure
   - Easy to write tests
   - Easy to debug

5. **Team Collaboration**
   - Clear conventions
   - Consistent patterns
   - Easy onboarding

## Extension Points

### Adding a New Page Object

1. Create new file in `cypress/pages/`
2. Extend BasePage
3. Define selectors
4. Implement page methods
5. Use in tests

### Adding Custom Commands

1. Add command to `cypress/support/commands.js`
2. Use Cypress.Commands.add()
3. Use in tests

### Adding Test Data

1. Static data: Add to `cypress/fixtures/`
2. Dynamic data: Add generator to `cypress/utils/testDataGenerator.js`

### Adding New Environment

1. Add config to `cypress/config/environments.js`
2. Set `CYPRESS_ENV` environment variable

## Best Practices

1. **Page Objects**
   - One page object per page
   - Keep selectors in one place
   - Methods should be atomic
   - Return `this` for chaining

2. **Tests**
   - One assertion per test (when possible)
   - Use descriptive test names
   - Keep tests independent
   - Use fixtures for test data

3. **Selectors**
   - Prefer data-testid attributes
   - Use meaningful selector names
   - Store in page objects
   - Avoid hardcoded selectors

4. **Test Data**
   - Use fixtures for static data
   - Use generators for dynamic data
   - Keep data realistic
   - Avoid hardcoded data

## Future Enhancements

Potential improvements:
- API testing layer
- Visual regression testing
- Performance testing utilities
- Test reporting integration
- Parallel execution optimization
- Cross-browser testing strategies
- Mobile testing support
