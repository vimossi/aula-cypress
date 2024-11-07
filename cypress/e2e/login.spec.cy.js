import userData from '../fixtures/user-data.json'
import DashboardPage from '../pages/dashboardPage.js';
import LoginPage from '../pages/loginPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {
  it('Login - Success', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashBoardPage()
  })

  it('Login - Fail', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.invalidAlert()
  })
});