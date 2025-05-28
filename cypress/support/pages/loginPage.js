export class LoginPage {
    locators = {
        loginLink : '[data-target="#logInModal"]',
        userNameField : '#loginusername',
        passwordField :  '#loginpassword',
        signInBtn : '.btn-primary',
        logoutBtn : '#logout2'
    }

    async LoginUser(email, pass) {
        
    cy.get(this.locators.loginLink).click()
    cy.get(this.locators.userNameField).click()
    cy.get(this.locators.userNameField).type(email)
    cy.get(this.locators.userNameField).should('have.value','test')
    cy.get(this.locators.passwordField).click()
    cy.get(this.locators.passwordField).type(pass)
    cy.get(this.locators.signInBtn).eq(2).click()
    cy.get(this.locators.logoutBtn).should('be.visible')
    }


}