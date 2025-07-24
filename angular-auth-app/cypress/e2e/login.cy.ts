describe('Login page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200/login'); // adapte l’URL selon ta route
  });

  it('should login successfully', () => {
    cy.get('input[name=email]').type('test@mail.com');
    cy.get('input[name=password]').type('123456');
    cy.get('button[type=submit]').click();

    // Exemple : vérifier la redirection ou présence d’un token
    cy.url().should('include', '/home');
  });

  it('should show error on invalid credentials', () => {
    cy.get('input[name=email]').type('wrong@example.com');
    cy.get('input[name=password]').type('wrongpass');
    cy.get('button[type=submit]').click();
    cy.contains('Invalid credentials').should('be.visible');
  });
});
