import { ProductPage } from '../support/pages/addToCartPage'

describe('Add Samsung Galaxy S6 to cart - Combined Method', () => {
  const productPage = new ProductPage();
  it('should complete full product flow', () => {
    cy.visit('/'); // replace with your base URL if needed
    cy.mylogin('test','test');
    productPage.performFullProductFlow();
  });
});
