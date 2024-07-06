import loginPage from '../../pages/loginPage';

describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Invalid Cred Login Functionality',()=>{

        let loginpage = new loginPage()
        
        let username = 'Admin789456'
        let password = 'admin123789456'
        
        loginpage.getLogin(username,password)

        cy.get('.oxd-alert-content.oxd-alert-content--error').should('exist')
    })
})