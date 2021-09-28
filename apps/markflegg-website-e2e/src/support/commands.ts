// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

import { getLessonListItems, getModuleListItems } from './utils';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    interface Chainable<Subject> {
      navigateToHomePage(): typeof navigateToHomePage;
      navigateToLessonSelectPage(): typeof navigateToLessonSelectPage;
      navigateToLessonPage(): typeof navigateToLessonPage;
      login(email: string, password: string): void;
    }
  }
}
//
// -- This is a parent command --
Cypress.Commands.add('login', (email, password) => {
  console.log('Custom command example: Login', email, password);
});
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
function navigateToHomePage(): void {
  cy.visit('/');
}
function navigateToLessonSelectPage(): void {
  cy.visit('/');
  getModuleListItems().first().click();
}
function navigateToLessonPage(): void {
  navigateToLessonSelectPage();
  getLessonListItems().first().click();
}

Cypress.Commands.add('navigateToHomePage', navigateToHomePage);
Cypress.Commands.add('navigateToLessonSelectPage', navigateToLessonSelectPage);
Cypress.Commands.add('navigateToLessonPage', navigateToLessonPage);
