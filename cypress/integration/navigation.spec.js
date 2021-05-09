describe('Navigation in app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000')
    })

    it('open network page', () => {
        cy.contains('Check out the network page').click()
        cy.url().should('include', '/network')
    })

    it('open imprint page', () => {
        cy.contains('Imprint').click()
        cy.url().should('include', '/imprint')
    })

    it('open privacy page', () => {
        cy.contains('Privacy').click()
        cy.url().should('include', '/privacy')
    })

    afterEach(() => {
        cy.go('back')
    })
})
