class DashboardPage { 
  selectorList() {
    const selectors = {
      dashboardGrid: ".orangehrm-dashboard-grid",
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

  checkDashBoardPage() {
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(this.selectorList().dashboardGrid).should('be.visible')


  //   cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
  //   cy.get(selectorList.dashboardGrid)
  //   cy.get(selectorList.myInfoButton).click()
  //   cy.get(selectorList.firstNameField).clear().type('FirstNameTest')
  //   cy.get(selectorList.lastNameField).clear().type('LastNameTest')
  //   cy.get(selectorList.genericField).eq(3).clear().type('EmployeeId')
  //   cy.get(selectorList.genericField).eq(4).clear().type('OtherIdTest')
  //   cy.get(selectorList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
  //   cy.get(selectorList.dateField).eq(0).clear().type('2026-12-01')
  //   cy.get(selectorList.dateCloseButton).click()
  //   cy.get(selectorList.submitButton).eq(0).click({ force: true})
  //   cy.get('body').should('contain', 'Successfully Updated')
  //   cy.get(selectorList.selectCaretDown).eq(0).click()
  //   cy.get(selectorList.countrySelected).click()
  //   cy.get(selectorList.selectCaretDown).eq(1).click()
  //   cy.get(selectorList.maritalStatus).click()
  // }
  }
}

export default DashboardPage;