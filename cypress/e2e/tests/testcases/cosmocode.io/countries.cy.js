

describe('cosmo code - countries details', () => {

    it('test cosmo code countries scenario', () => {

        cy.visit('https://cosmocode.io/automation-practice-webtable/')

        cy.get('#countries').find('tbody tr td').as('countryData')

        cy.get('@countryData').each((contriesData) => {
            if (contriesData.text().includes('Niger')) {
                cy.wrap(contriesData).parent().find('.hasVisited').check()
            }
        })

    })

})