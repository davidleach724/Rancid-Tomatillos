describe('Single Movie view flow', () => {
   it('Should be able to display movie poster on load', () => {
    cy.visit('http://localhost:3000/Rancid-Tomatillos/581392')
    cy.get('img').should('be.visible')
   })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.visit('http://localhost:3000/Rancid-Tomatillos/581392')
    cy.get('div')
    .should('have.class', 'single-movie-container')
  })

  it('Should contain a link that takes the user to the main page', () => {
    cy.visit('http://localhost:3000/Rancid-Tomatillos/581392')
    cy.get('div')
    .should('have.class', 'single-movie-container')
    .contains('GO BACK')
  })

  it('Should be able to click on GO BACK and take them back to the home screen', () => {
    cy.visit('http://localhost:3000/Rancid-Tomatillos/581392')
    cy.get('div')
    .should('have.class', 'single-movie-container')
    .contains('GO BACK').click()
    cy.url().should('not.eq', 'http://localhost:3000/Rancid-Tomatillos/694919')
  })

  it('Should display an error message when an invalid card id is in the url', () => {
    cy.visit('http://localhost:3000/Rancid-Tomatillos/581')
    cy.get('h2').contains('Sorry...Server Error 🤷‍♂️')
  })

  it('Should display an error message if the page is loaded incorrectly', () => {
    cy.intercept('http://localhost:3000/Rancid-Tomatillos/581392', {
      statusCode: 404
    })
    .get('h2').contains('Sorry...Server Error 🤷‍♂️')
  })
})
