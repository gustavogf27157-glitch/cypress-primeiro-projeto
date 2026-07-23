describe('Teste de login', () => {
  it('Login com sucesso', () => {
    cy.visit('https://front.serverest.dev/login')
    cy.get('[data-testid="email"]'). type ('gustavogf27157@gmail.com')
    cy.get('[data-testid="senha"]'). type (123)
    cy.get('[data-testid="entrar"]') .click()
    cy.get(':nth-child(1) > .card-body > div > [href="/minhaListaDeProdutos"] > [data-testid="adicionarNaLista"]').click()
    cy.get('h1').contains('Lista de Compras')
  })
})