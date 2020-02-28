import { Given, When, And, Then} from 'cypress-cucumber-preprocessor/steps'

Given('I open todo page', () => {
  cy.visit('http://localhost:4200/todos')
});
When('I input title {string}', (text) => {
  cy.get('#inputTitle').type(text)
});
And('I input description {string}', (text) => {
  cy.get('#inputDescription').type(text)
});
And('I click เพิ่มTask', () => {
  cy.get('#buttonAddTask').click()
});
Then('I see {string} on task list', (text) => {
  cy.get('.row > :nth-child(2)').should('contain', text)
});
