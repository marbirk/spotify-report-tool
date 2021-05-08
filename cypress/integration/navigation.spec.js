describe('Navigation in app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000')
    })

    it('open network page', () => {
        cy.contains('Check out the network page').click()
        cy.url().should('include', '/network')
    })

    afterEach(() => {
        cy.go('back')
    })
})
