import { ProductPage } from '../support/pages/productPage';
describe('Samsung Galaxy S6 Full Flow', () => {
  it('should add the product to cart and then delete it', () => {
    cy.fixture('user').then((userData) => {

      const productPage = new ProductPage();
      cy.visit('/'); // Update with actual base URL if needed
      cy.mylogin(userData.email, userData.password)
      productPage.performFullProductFlow();
    })
  });
});
