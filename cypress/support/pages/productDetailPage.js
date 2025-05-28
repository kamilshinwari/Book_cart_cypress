export class productDetailScreen {
    locators = {
      categoryListItems: '.list-group-item',
      productCardBlock: '.card-block',
      samsungLink: '//a[text()="Samsung galaxy s6"]',
      productName: '.name',
      productPrice: '.price-container',
      productDescription: '#myTabContent',
    };
  
    verifySamsungGalaxyS6InPhonesCategory() {
      cy.get(this.locators.categoryListItems).each(($el) => {
        const myText = $el.text().trim();
  
        if (myText.toLowerCase() === 'phones') {
          cy.wrap($el).click();
  
          cy.get(this.locators.productCardBlock).eq(0).should('contain.text', 'Samsung galaxy s6');
          cy.xpath(this.locators.samsungLink).click();
          cy.get(this.locators.productName).should('have.text', 'Samsung galaxy s6');
          cy.get(this.locators.productPrice).eq(0).should('contain.text', '$360');
  
          cy.get(this.locators.productDescription).should(
            'contain',
            'The Samsung Galaxy S6 is powered by 1.5GHz octa-core Samsung Exynos 7420 processor and it comes with 3GB of RAM. The phone packs 32GB of ternal storage cannot be expanded.'
          );
        }
      });
    }
  }
  