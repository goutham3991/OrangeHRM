describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Password Required Message',()=>{
        
        let username = 'Admin'

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').clear().type(username)
        cy.get('button[type="submit"]').click()

        cy.get('div>span[class*="oxd-input-group__message"]').should('be.visible').should('contain.text','Required')

    })
})