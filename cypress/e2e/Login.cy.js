import { LoginPage } from "../support/pages/loginPage"

it("Login user with valid credentials", ()=> {
    const loginPage = new LoginPage();
    cy.fixture('user').then((user)=>{
    cy.visit('/') 
    loginPage.LoginUser(user.email,user.password)
    })

})