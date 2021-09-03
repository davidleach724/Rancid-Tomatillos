describe('User movie flows', () => {

  beforeEach(() => {
      cy.visit('http://localhost:3000')
    })

    it('Navbar should contain website title', () => {
        cy.get('h1').contains('🍅 🤢 Rancid Tomatillos 🎥')
    })

    it('Should be able to display movie cards on load', () => {
        cy.get('img').should('be.visible')
    })

    it('Should be able to click on movie card and page updates URL and display details', () => {
      cy.get('[alt="Money Plane poster"]').click()
      cy.url().should('not.eq', 'http://localhost:3000/')
    })

    it('Should display error message if page is not found', () => {
      cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
      statusCode: 404
    })
    cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies'), {
      statusCode: 500
    }
    cy.visit('http://localhost:3000/')
    cy.get('h2').contains('Sorry...Server Error 🤷‍♂️')
  })
  })
