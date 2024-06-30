//<reference types=”cypress”/>
import 'cypress-wait-until';
import dashboard from '../pages/dashboard';
import loginPage from '../pages/loginPage';

describe('verify dashboard page',()=>{

    it('check dahsboard page details',()=>{

        let loginpage = new loginPage()
        let dash = new dashboard()
        let username = 'Admin'
        let password = 'admin123'
        let dashboardMenu = 'Dashboard'
        let title = 'OrangeHRM'
        
        loginpage.getLogin(username,password)
        dash.getDashboardPage()
        dash.getDashboardMenus()
        dash.goToDashboardMenu(dashboardMenu)
        dash.getTitle(title)
    })
})