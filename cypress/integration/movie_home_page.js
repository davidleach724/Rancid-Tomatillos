describe('User movie flows', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Navbar should contain website title', () => {
        cy.get('h1').contain('🍅 🤢 Rancid Tomatillos 🎥')
    })
