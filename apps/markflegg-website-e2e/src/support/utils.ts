export const getModuleListItems = () => {
  return cy.get('.module-list ion-item');
};
export const getLessonListItems = () => {
  return cy.get('.lesson-list ion-item');
};
export const getLessonContent = () => {
  return cy.get('.lesson-content');
};
