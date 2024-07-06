
describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Forgot Password Functionality',()=>{ 
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('.oxd-text.oxd-text--p.orangehrm-login-forgot-header').should('exist').click()
        console.log(cy.url())
        cy.url().should('contain','requestPasswordResetCode')
        cy.get('div.orangehrm-card-container').find('.oxd-text.oxd-text--h6.orangehrm-forgot-password-title').should('contain.text','Reset Password')
        cy.get('.oxd-text.oxd-text--p:nth-child(1)').should('contain.text','Please enter your username to identify your account to reset your password')
        cy.get('input[name="username"]').should('be.visible')
        cy.get('.orangehrm-forgot-password-button-container').find("button[class*='orangehrm-forgot-password-button--cancel']").should('be.visible')
        cy.get('.orangehrm-forgot-password-button-container').find("button[class*='orangehrm-forgot-password-button--reset']").should('be.visible')

    })
})