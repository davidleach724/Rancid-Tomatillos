beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    describe('Movie cards display on App', () => {

    it('Navbar should contain website title', () => {
        cy.get('h1').contain('🍅 🤢 Rancid Tomatillos 🎥')
    })
})
