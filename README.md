Book Cart App Automation

This project automates the testing of a Book Cart web application using Cypress. It follows the Page Object Model (POM) structure, includes custom Cypress commands, uses fixture files for test data, and generates reports using Mochawesome.

Project Setup
Prerequisites
Node.js (v14 or above recommended)
npm or yarn
Git (optional, for version control)
Project Structure
 book-cart-automation/cypress/fixtures/         # Test data (JSON)
 book-cart-automation/cypress/e2e/              # E2E test cases
 book-cart-automation/cypress/support/commands.js   # Custom Cypress commands
 book-cart-automation/cypress/support/e2e.js
 book-cart-automation/cypress/support/pages/            # Page Object Model (POM) classes
 book-cart-automation/cypress/cypress.config.js     # Cypress config file
 book-cart-automation/cypress/package.json          # Project dependencies & scripts
 book-cart-automation/cypress/README.md

Features Implemented
Page Object Model (POM)
Encapsulates page interactions inside separate JS classes.

Promotes reusability and maintainability of test code.

✅ Mochawesome Report
Generates detailed, visual HTML test reports.
Integrated with Cypress via the mochawesome reporter.
✅ Custom Cypress Commands
Created reusable commands in commands.js to keep test cases clean and DRY.
✅ Fixtures
Test data stored in JSON files under the fixtures/ folder.
Helps in maintaining dynamic and flexible test inputs.
✅ Reusable Methods
Common test logic abstracted into helper methods or custom commands.

Running the Tests
Run All Tests (Headless Mode)
npx cypress run

Run Tests with UI (Interactive Mode)
npx cypress open



