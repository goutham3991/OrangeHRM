class myInfo {

    goToInfoTab(value){
        cy.get('li a').each(($el)=>{
            if($el.text()=== value){
                cy.wrap($el).click()
            }

        })
    }

    checkMyInfoURL(){
        cy.url().should('contain','viewPersonalDetails')
    }

    EditPersonalDetails(){
        let updateFirstName = "Captain"
        let updateMiddleName = "America"
        let updateLastName = "Avenger"
        let updateDrivingLicense = "123456789"
        let currentDate = 
        cy.get('.--name-grouped-field').find('input[name="firstName"]').clear().type(updateFirstName)
        cy.get('.--name-grouped-field').find('input[name="middleName"]').clear().type(updateMiddleName)
        cy.get('.--name-grouped-field').find('input[name="lastName"]').clear().type(updateLastName)
        cy.get(':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input')
        .clear().type(updateDrivingLicense)
        cy.get('input[placeholder="yyyy-dd-mm"]').first().clear().type('2024-07-07')

    }
}
export default myInfo