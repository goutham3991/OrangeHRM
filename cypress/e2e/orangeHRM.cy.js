
describe('Scenario: Check OrangeHRM login Functionality',()=>{
    it('Test Case: Verify Successfull Login Functionality',()=>{
        
        cy.login('Admin','admin123');
        cy.title().should('eq', 'OrangeHRM');
    })
})