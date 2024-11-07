class LoginPage { 
  selectorList() {
    const selectors = {
      usernameField: "[name='username']",
      passwordField: "[name='password']",
      loginButton: "[type='submit']",
      wrongCredentialAlert: "[role='alert']",
    }
    return selectors
  } 

  acessLoginPage() {
    cy.visit('auth/login')
  }

  loginWithUser(username, password) {
    cy.get(this.selectorList().usernameField).type(username)
    cy.get(this.selectorList().passwordField).type(password)
    cy.get(this.selectorList().loginButton).click()
  }
}

export default LoginPage