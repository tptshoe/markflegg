import { getLessonListItems, getModuleListItems } from '../support/utils';

describe('Home', () => {
  beforeEach(() => {
    cy.navigateToHomePage();
  });

  it('should be able to view a list of modules', () => {
    getModuleListItems().should('have.length', 5);
  });

  it('the list of modules should contain the titles of the modules', () => {
    getModuleListItems().last().should('contain.text', 'Module Five');
  });

  it('after selecting a specific module, the user should be able to see a list of available lessons', () => {
    getModuleListItems().first().click();
    getLessonListItems().should('have.length.greaterThan', 0);
  });
});
