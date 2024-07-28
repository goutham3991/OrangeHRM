class pimpage{
    goToDashboardMenu(value){
        cy.get('li a').each(($el)=>{
            if($el.text()=== value){
                cy.wrap($el).click()
            }

        })
    }
    verifyPageTitleURL(){
        cy.title().should('contain','OrangeHRM')
        cy.url().should('contain','pim/viewEmployeeList')
    }
    addNewEmployee(){
        cy.get('.orangehrm-header-container').contains('Add').should('be.visible').click()
    }
    getCountofRecords(){
        let numberCount
        cy.get('.orangehrm-horizontal-padding.orangehrm-vertical-padding').invoke('text').then((countText)=>{
            let splitCountText = countText.split('(')
            let numberSplit = splitCountText[1].split(')')
            return numberCount = parseInt(numberSplit[0]) 
        })

    }
    name(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let randomName = possible
    
        for (let i = 0; i < 5; i++)
          text += randomName.charAt(Math.floor(Math.random() * randomName.length));
    
        return text;
    }
    middleName(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let randomName = possible
    
        for (let i = 0; i < 5; i++)
          text += randomName.charAt(Math.floor(Math.random() * randomName.length));
    
        return text;
    }
    lastName(){
        let text = "";
        let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
        let randomName = possible
    
        for (let i = 0; i < 5; i++)
          text += randomName.charAt(Math.floor(Math.random() * randomName.length));
    
        return text;
    }
    enterName(name){
        cy.get('input[name="firstName"]').type(name)
    } 
    enterMiddleName(name){
        cy.get('input[name="middleName"]').type(name)
    }
    enterLastName(name){
        cy.get('input[name="middleName"]').type(name)
    }
    createCredentialsToggle(){
        cy.get('.oxd-form-row.user-form-header').find('.oxd-switch-wrapper').click()
    }
}
export default pimpage