describe('User movie flows', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000')
    })


    it('Navbar should contain website title', () => {
        cy.get('h1').contain('🍅 🤢 Rancid Tomatillos 🎥')
    })

    it('Should show an error message if server does not respond', () => {
      cy.get('h2').contain('Sorry...Server Error 🤷‍♂️')
    })

    it('Should be able to display movie cards on load', () => {
        cy.get('img').should('be.visible')//
    })

    it('Should be able to click on movie card and page updates URL and display details', () => {
      cy.url().then(url => {
          cy.get('.movieCards').click()
          cy.url().should('eq', 'http://localhost:3000/694919')
          cy.url().should('not.eq', url);
      })
    })
})
