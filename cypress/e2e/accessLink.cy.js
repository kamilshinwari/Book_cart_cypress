it('get all links',()=>{
    cy.visit('/');
    const allLinks = cy.get('.mb-4').should('have.length',9)
})