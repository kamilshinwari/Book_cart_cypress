// cypress/support/pageObjects/SignUpPage.js

export class UserRegistration {
    locators = {
      signinButton: '#signin2',
      usernameInput: '#sign-username',
      passwordInput: '#sign-password',
      signupButton: 'button.btn-primary',
    }
  
    visit(url = '/') {
      cy.visit(url)
    }
  
    openSignUpModal() {
      cy.get(this.locators.signinButton).click()
    }
  
    enterUsername(username) {
      cy.get(this.locators.usernameInput).click().type(username)
    }
  
    enterPassword(password) {
      cy.get(this.locators.passwordInput).click().type(password)
    }
  
    submitSignUp() {
      // The sign up button is the second button with class .btn-primary, so eq(1)
      cy.get(this.locators.signupButton).eq(1).click()
    }
  }
  

  