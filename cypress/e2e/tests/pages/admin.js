class Admin{

    goToDashboardMenu(value){
        cy.get('li a').each(($el)=>{
            if($el.text()=== value){
                cy.wrap($el).click()
            }

        })
    }

    dropDownMenus(value){
        cy.get('span.oxd-topbar-body-nav-tab-item').each(($el)=>{
            if($el.text()===value){
                cy.wrap($el).click()
            }
        })
    }

    subDropDownMenu(mainMenu,subMenu){
        this.dropDownMenus(mainMenu)
        cy.contains(subMenu).click()
    }

    addUserName(username){
        cy.get('.oxd-table-filter').should('be.visible')
        cy.get('.oxd-input-group.oxd-input-field-bottom-space').find('input.oxd-input.oxd-input--active').scrollIntoView().as('username')
        cy.get('@username').type(username)
    }

    selectRole(role){
        cy.get('.oxd-table-filter').should('be.visible')
        cy.get('.oxd-input-group.oxd-input-field-bottom-space').eq(2).should('be.visible')
        cy.get('.oxd-select-wrapper > .oxd-select-text').first().click({force:true})
        cy.get("div[role='listbox']",{timeout:2000}).should('be.visible')
        cy.contains(role).click({force:true})
    }

    enableStatus(){
        cy.get('.oxd-table-filter').should('be.visible')
        cy.get('.oxd-input-group.oxd-input-field-bottom-space').last().should('be.visible')
        cy.get('.oxd-select-wrapper > .oxd-select-text').last().click({force:true})
        cy.get("div[role='listbox']",{timeout:2000}).should('be.visible')
        cy.contains('Enabled').click({force:true})
    }

    disabledStatus(){
        cy.get('.oxd-table-filter').should('be.visible')
        cy.get('.oxd-input-group.oxd-input-field-bottom-space').last().should('be.visible')
        cy.get('.oxd-select-wrapper > .oxd-select-text').last().click({force:true})
        cy.get("div[role='listbox']",{timeout:2000}).should('be.visible')
        cy.contains('Disabled').click({force:true})
    }

    searchButton(){
        cy.get('.oxd-form-actions').contains('Search').click()
    }

    resetButton(){
        cy.get('.oxd-form-actions').contains('Reset').click()
    }

    addNewuser(user,role){
        this.addUserName(user)
        this.selectRole(role)
        this.enableStatus()
        this.searchButton()
    }

    noRecordsFoundMsg(){
        cy.contains('No Records Found',{timeout:2000}).should('be.visible')
    }
}
export default Admin