// cypress/support/pageObjects/HomePage.js

class HomePage {
    locators = {
      categoryItems: '.list-group-item',
      productCard: '.card-block',
    }
  
    visitURL() {
      cy.visit('/')
    }
  
    myLogin(username, password) {
      // Assuming you have your login logic somewhere, adapt as needed
      cy.get('#login2').click()
      cy.get('#loginusername').type(username)
      cy.get('#loginpassword').type(password)
      cy.get('button.btn-primary').contains('Log in').click()
    }
  
    getCategoryItems() {
      return cy.get(this.locators.categoryItems)
    }
  
    selectCategoryAndCheckProduct(expectedCategory, expectedProduct) {
      this.getCategoryItems().each(($el) => {
        const text = $el.text().trim().toLowerCase()
  
        if (text === expectedCategory.toLowerCase()) {
          cy.wrap($el).click()
          cy.get(this.locators.productCard).eq(0).should('contain.text', expectedProduct)
        }
      })
    }
  }
  
  export default HomePage
  