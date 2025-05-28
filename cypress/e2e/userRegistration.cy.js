import { UserRegistration } from "../support/pages/userRegistration"

describe('Simple Test', () => {
  const userRegistration = new UserRegistration()

  it('Register user with already used email', () => {
    userRegistration.visit('/')
    userRegistration.openSignUpModal()
    userRegistration.enterUsername('test')
    userRegistration.enterPassword('type')
    userRegistration.submitSignUp()

    cy.on('window:confirm', (msg) => {
      expect(msg).to.contain('This user already exist.')
      return true
    })
  })

  it('Register user with new email', () => {
    userRegistration.visit('https://www.demoblaze.com/')
    
    cy.on('window:confirm', (msg) => {
      expect(msg).to.contain('Sign up successful.')
      return true
    })

    userRegistration.openSignUpModal()
    userRegistration.enterUsername('testrtt1234')
    userRegistration.enterPassword('test2')
    userRegistration.submitSignUp()
  })
})
