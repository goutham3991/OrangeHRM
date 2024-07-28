import loginPage from '../../pages/loginPage';

describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Successfull Login Functionality',()=>{

        let loginpage = new loginPage()
        
        let username = Cypress.env('username')
        let password = Cypress.env('password')
        let pageTitle = 'OrangeHRM'
        
        loginpage.getLogin(username,password)
        loginpage.getTitle(pageTitle)
    })
})