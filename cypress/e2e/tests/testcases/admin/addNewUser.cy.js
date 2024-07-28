import Admin from '../../pages/admin';
import loginPage from '../../pages/loginPage';
describe('Scenario: Add New User',()=>{
        let loginpage = new loginPage()
        let admin = new Admin()
    it('Test Case: Verify Add New User Functionality',()=>{
        let username = 'Admin'
        let password = 'admin123'
        loginpage.getLogin(username,password)
        cy.get('ul.oxd-main-menu').find('a').contains('Admin').click()
        cy.get('.oxd-topbar-header-title').contains('Admin')
        cy.get('.orangehrm-header-container button').click()

        // steps to fill the form
        // Step 1: Select User Role
        let roles = ["Admin", "ESS"];
        let randomRole = roles[Math.floor(Math.random()*roles.length)];
        cy.get('.oxd-grid-item.oxd-grid-item--gutters').contains('User Role').should('be.visible').then(()=>{
            cy.get('.oxd-select-text-input').eq(0).click()
            cy.get('div[role="listbox"]').contains(randomRole).should('be.visible').click()

        })
        //Step 2: Select Status
        let status = ["Enabled", "Disabled"];
        let randomStatus = status[Math.floor(Math.random()*status.length)];
        cy.get('.oxd-grid-item.oxd-grid-item--gutters').contains('Status').should('be.visible').then(()=>{
            cy.get('.oxd-select-text-input').eq(1).click()
            cy.get('div[role="listbox"]').contains(randomStatus).should('be.visible').click()

        })
        //Step 3: Search for the Employee
        let employeeName = "Paul Robinson"
        cy.get('[placeholder="Type for hints..."]').type(employeeName,{timeout: 3000}).then(()=>{
            cy.wait(5000)
            cy.get('.oxd-autocomplete-dropdown').click()
        })
        //Step 4: Enter Username
        let userName = admin.getRandomeUserName()
        let randomPassword = admin.getRandomepassword()
        let confirmPassword = randomPassword
        cy.get('.oxd-input.oxd-input--active').eq(1).type(userName)
        cy.get('.oxd-input.oxd-input--active').eq(1).type(randomPassword)
        cy.get('.oxd-input.oxd-input--active').eq(2).type(confirmPassword)
        //Step 5: Click on Submit Button
        cy.get('button[type="submit"]').click()
        //Step 6: Verify Success Message
        cy.contains('Success')

        //Step 7: Verify Headers of the table
        //cy.get('.oxd-button--ghost').contains('Cancel').click()
        admin.verifyCreatedUserData()

    })
})