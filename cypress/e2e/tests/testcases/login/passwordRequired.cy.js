import loginPage from '../../pages/loginPage';

describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Username Required Message',()=>{
        
        let password = 'admin123'

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="password"]').clear().type(password)
        cy.get('button[type="submit"]').click()

        cy.get('div>span[class*="oxd-input-group__message"]').should('be.visible').should('contain.text','Required')

    })
})