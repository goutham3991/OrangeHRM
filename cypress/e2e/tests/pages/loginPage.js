
class loginPage{

    getLogin(username,password){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('input[name="username"]').clear().type(username)
        cy.get('input[name="password"]').clear().type(password)
        cy.get('button[type="submit"]').click()
    }

    getTitle(value){
        cy.title().should('contains', value, {matchCase : false});
    }
}
export default loginPage