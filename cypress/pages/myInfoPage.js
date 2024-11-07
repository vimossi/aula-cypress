class MyInfoPage {
  selectorList(){
    const selectors = {
      myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
      firstNameField: "[name = 'firstName']",
      lastNameField: "[name = 'lastName']",
      genericField: ".oxd-input--active",
      dateField: "[placeholder='yyyy-dd-mm']",
      dateCloseButton: ".--close",
      submitButton: "[type='submit']",
      selectCaretDown: ".oxd-select-text--arrow",
      countrySelected: ":nth-child(27)",
      maritalStatus: ".oxd-select-dropdown > :nth-child(2) > span",
    }
    return selectors
} 

fillPersonalDetails(firstName, lastName){
  cy.get(this.selectorList().firstNameField).clear().type(firstName)
  cy.get(this.selectorList().lastNameField).clear().type(lastName)
}

fillEmployeesDetails(employeeId, otherId, driversLicenseDate, fieldDate){
  cy.get(this.selectorList().genericField).eq(4).clear().type(employeeId)
  cy.get(this.selectorList().genericField).eq(5).clear().type(otherId)
  cy.get(this.selectorList().genericField).eq(6).clear().type(driversLicenseDate)
  cy.get(this.selectorList().dateField).eq(0).clear().type(fieldDate)
  cy.get(this.selectorList().dateCloseButton).click()
}

saveForm(){
  cy.get(this.selectorList().submitButton).eq(0).click()
  cy.get('body').should('contain', 'Successfully Updated')
}

fillStatus(){
  cy.get(this.selectorList().selectCaretDown).eq(0).click()
  cy.get(this.selectorList().countrySelected).click()
  cy.get(this.selectorList().selectCaretDown).eq(1).click()
  cy.get(this.selectorList().maritalStatus).click()
}}

export default MyInfoPage