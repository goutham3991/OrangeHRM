import dashboard from '../../pages/dashboard';
import loginPage from '../../pages/loginPage';
import Admin from '../../pages/admin';

describe('verify admin page',()=>{

    it('check admin page details',()=>{

        let loginpage = new loginPage()
        let dash = new dashboard()
        let admin = new Admin()

        let username = 'Admin'
        let password = 'admin123'
        let dashboardMenu = 'Admin'
        let dropDownMenus = 'User Management'
        let subMenu = 'Users'
        let user = 'Jack'
        let role = 'ESS'
        
        loginpage.getLogin(username,password)

        dash.getDashboardPage()
        dash.getDashboardMenus()

        admin.goToDashboardMenu(dashboardMenu)
        admin.dropDownMenus(dropDownMenus)
        admin.subDropDownMenu(dropDownMenus,subMenu)

        admin.addNewuser(user,role)

        admin.noRecordsFoundMsg()

    })
})