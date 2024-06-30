import 'cypress-wait-until';

class dashboard{

    getDashboardPage(){
        cy.url().should('contain','dashboard')
    }

    getTitle(value){
        cy.title().should('contains', value, {matchCase : false});
    }

    getDashboardMenus(){
        cy.get('li a').should('have.length',12)
    }

    goToDashboardMenu(value){
        cy.get('li a').each(($el)=>{
            if($el.text()=== value){
                cy.wrap($el).click()
            }

        })
    }
}
export default dashboard