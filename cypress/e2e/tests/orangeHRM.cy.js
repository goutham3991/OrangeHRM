import loginPage from '../../e2e/tests/pages/loginPage';

describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Successfull Login Functionality',()=>{

        let loginpage = new loginPage()
        
        let username = 'Admin'
        let password = 'admin123'
        let pageTitle = 'OrangeHRM'
        
        loginpage.getLogin(username,password)
        loginpage.getTitle(pageTitle)
    })
})