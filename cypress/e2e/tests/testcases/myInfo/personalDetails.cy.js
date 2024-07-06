import loginPage from '../../pages/loginPage';
import myInfo from '../../pages/info';

describe('Scenario: Check Personal Details',()=>{
    let loginpage = new loginPage()
    let info = new myInfo()


    beforeEach('login before test and navigate to myinfo tab',()=>{
        let username = 'Admin'
        let password = 'admin123'
        let tab = 'My Info'
        loginpage.getLogin(username,password)
        info.goToInfoTab(tab)
        info.checkMyInfoURL()
    })
    it('Verify view personal details',()=>{
        info.checkMyInfoURL()
    })
    it('Verify edit functionalityu for view personal details',()=>{
        info.EditPersonalDetails()
    })
})