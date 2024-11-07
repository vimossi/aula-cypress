import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {
  it('User info update - Sucess', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboardPage.checkDashBoardPage()
    menuPage.acessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeesDetails('EmployeeID', 'OtherId', '12345', '2026-12-01', )
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
  })
});