/// <reference types="Cypress" />

describe('Página de Desafios/Exercícios em Javascript', function() {
  // const THREE_SECONDS_IN_MS = 3000;
  beforeEach(function() {
    cy.visit('/src/index.html');
  });

  it('Verifica o título da aplicação', () => {
    cy.title().should('be.equal', 'Home Page');
    cy.get('body h1').should('have.text', 'Desafios/Exercícios em Javascript');
  })

  it('Verifica a seção de links', () => {
    cy.get('body section').should('be.visible')
    cy.get('div').contains('Desafio').should('be.visible')
    cy.get('div').contains('Exercício').should('be.visible')
  })

  it.only('Verifica que a página de desafios abre em outra aba sem a necessidade de um clique', () => {
    cy.get('a[href="/Desafios/index.html"]').should('be.visible').should('have.attr', 'target', '_blank')
  })

  it('Verifica que a página de exercícios abre em outra aba sem a necessidade de um clique', () => {
    
  })
})