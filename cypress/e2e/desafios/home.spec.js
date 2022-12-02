/// <reference types="Cypress" />

describe('Página de Desafios em Javascript', function() {
  // const THREE_SECONDS_IN_MS = 3000;
  beforeEach(function() {
    cy.visit('/Desafios/index.html');
  });

  it('Verifica o título da aplicação', function() {
    cy.title().should('be.equal', 'Desafios JavaScript');
  })
})