import { productDetailScreen } from "../support/pages/productDetailPage";
it("navigate to product detail screen", ()=> {
    const productScreen = new productDetailScreen();
    cy.visitURL('/');
    cy.mylogin('test','test');
    productScreen.verifySamsungGalaxyS6InPhonesCategory();
})