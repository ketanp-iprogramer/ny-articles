
describe('NY Times Most Popular Articles', () => {
  it('displays the page title', () => {
    cy.visit('/');
    cy.contains('NY Times Most Popular Articles').should('be.visible');
  });

  it('displays articles list', () => {
    cy.visit('/');
    cy.get('.article-item').should('have.length.greaterThan', 0);
  });

  it('shows article details on click', () => {
    cy.visit('/');
    cy.get('.article-item').first().click();
    cy.contains('Back').should('be.visible');
  });

  it('goes back to articles list', () => {
    cy.visit('/');
    cy.get('.article-item').first().click();
    cy.contains('Back').click();
    cy.get('.article-item').should('have.length.greaterThan', 0);
  });
});
