import pimpage from "../../pages/PIM"

describe('Scenario: Test PIM Page', () => {
    let pimpageObj = new pimpage()
    //let employeeName = pimpageObj.name()
    //let employeeMiddleName = pimpageObj.middleName()
    //let employeeLastName = pimpageObj.enterLastName()

    it.skip('Test Case: Test PIM page functionlity', () => {
        cy.loginWithCred()
        pimpageObj.goToDashboardMenu('PIM')
        pimpageObj.verifyPageTitleURL()
        
        //pimpageObj.getCountofRecords()
        //pimpageObj.addNewEmployee()


        //pimpageObj.enterName(employeeName)
        //pimpageObj.enterMiddleName(employeeMiddleName)
        //pimpageObj.enterLastName(employeeLastName)

        //pimpageObj.createCredentialsToggle()

    })
})