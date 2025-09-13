describe('Meu Primeiro Teste', () => {
  it('visita o site do Google', () => {
    cy.visit('https://www.google.com')
    cy.get('input[name="q"]').type('Testando Cypress{enter}')
  })
})
