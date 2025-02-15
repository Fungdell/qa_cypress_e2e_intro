/// <reference types="cypress" />

describe('Sign In page', () => {
  it('should provide an ability to log in', () => {
    cy.visit('https://react-redux.realworld.io');
    cy.get(':nth-child(2) > .nav-link').click(); 
    cy.get(':nth-child(1) > .form-control').type('332323@i.ua');
    cy.get(':nth-child(2) > .form-control').type('12345');
    cy.get('.btn').click();
    cy.get(':nth-child(4) > .nav-link').should('contain.text', 'Fungdee');

  });
});
