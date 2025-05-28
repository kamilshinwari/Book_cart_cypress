import HomePage from '../support/pageObjects/HomePage'

describe("Category Selection Test", () => {
  const homePage = new HomePage()

  it("select category named phone", () => {
    homePage.visitURL()
    homePage.myLogin('test', 'test')

    homePage.getCategoryItems().its('length').should('equal', 4)

    // Phones
    homePage.selectCategoryAndCheckProduct('Phones', 'Samsung galaxy s6')

    // Laptops
    homePage.selectCategoryAndCheckProduct('Laptops', 'Sony vaio i5')

    // Monitors
    homePage.selectCategoryAndCheckProduct('Monitors', 'Apple monitor 24')
  })
})
