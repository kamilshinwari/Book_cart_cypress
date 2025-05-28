it("select category named phone", ()=> {
    cy.visitURL();
    cy.mylogin('test','test');
    cy.get('.list-group-item').its('length').then((count)=> {
    expect(count).to.equal(4)
    })

    cy.get('.list-group-item').each(($el) => {
        const text = $el.text().trim()
  
        if (text.toLowerCase() === 'phones') {
          // Wrap the raw DOM element in a Cypress chainable to click
          cy.wrap($el).click()
          cy.get('.card-block').eq(0).should('contain.text','Samsung galaxy s6')
        }

        else if(text.toLowerCase()==="laptops"){
            cy.wrap($el).click()
            cy.get('.card-block').eq(0).should('contain.text','Sony vaio i5')
        }
        else if(text.toLocaleLowerCase()==='monitors'){
            cy.wrap($el).click()
            cy.get('.card-block').eq(0).should('contain.text','Apple monitor 24')
        }
      })
})