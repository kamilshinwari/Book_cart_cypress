// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Custom command to type in a text field
Cypress.Commands.add("typeText", (selector, text) => {
  cy.xpath(selector).type(text);
});


Cypress.Commands.add("visitURL",()=> {
  cy.visit('https://www.demoblaze.com/') 
})


Cypress.Commands.add("mylogin", (email, password) => {
  cy.visit('https://www.demoblaze.com/') 
  cy.get('[data-target="#logInModal"]').click()
  cy.get('#loginusername').click()
  cy.get('#loginusername').type(`${email}`)
  cy.get('#loginusername').should('have.value','test')
  cy.get('#loginpassword').click()
  cy.get('#loginpassword').type(`${password}`)
  cy.get('.btn-primary').eq(2).click()
  cy.get('#logout2').should('be.visible')
});

Cypress.Commands.add("typeTextcss", (selector, text) => {
  cy.get(selector).type(text);
});

// Custom command to click a button
Cypress.Commands.add("clickButton", (selector) => {
  cy.xpath(selector).click({ force: true });
});

// Custom command to select a radio button
Cypress.Commands.add("selectRadio", (selector, value) => {
  cy.xpath(selector).click();
});

Cypress.Commands.add(
  "userLogin",
  (UserNameSelector, passwordSelector, submitBtnSelector,userName,userPassword) => {
    cy.typeTextcss(UserNameSelector, userName);
    cy.typeTextcss(passwordSelector, userPassword);
    cy.clickButton(submitBtnSelector);
  }
);

Cypress.Commands.add("getText", (selector) => {
  return cy
    .xpath(selector)
    .invoke("text")
    .then((text) => text.trim());
});

Cypress.Commands.add("checkVisibility", (locator) => {
  cy.xpath(locator).should("be.visible");
});

Cypress.Commands.add("visitWebsite", () => {
  cy.visit("/login");
});

import "cypress-xpath";
