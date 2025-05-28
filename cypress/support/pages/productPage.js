export class ProductPage {
    locators = {
      samsungLink: '//a[text()="Samsung galaxy s6"]',
      productName: '.name',
      productPrice: '.price-container',
      addToCartBtn: '//a[text()="Add to cart"]',
      cartButton: '#cartur',
      cartProduct: '//td[text()="Samsung galaxy s6"]',
      deleteLink: '//a[text()="Delete"]'
    };
  
    performFullProductFlow() {
      cy.xpath(this.locators.samsungLink).click();
  
      cy.get(this.locators.productName).should('have.text', 'Samsung galaxy s6');
      cy.get(this.locators.productPrice).eq(0).should('contain.text', '$360');
  
      cy.on('window:confirm', (msg) => {
        expect(msg).to.contain('Sign up successful.');
        return true;
      });
  
      cy.xpath(this.locators.addToCartBtn).scrollIntoView().click();
      cy.get(this.locators.cartButton).click();
      cy.xpath(this.locators.cartProduct).should('be.visible');
      cy.xpath(this.locators.deleteLink).click({ multiple: true }); // Deletes all matching items
    }
  }
  