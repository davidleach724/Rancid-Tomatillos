describe('Single Movie view flow', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/581392')
  })

   it('Should be able to display movie poster on load', () => {
       cy.get('img').should('be.visible')
   })

  it('Should be able to visit the page and render the correct elements', () => {
    cy.get('div')
    .should('have.class', 'single-movie-container')
  })

  it('Should contain a link that takes the user to the main page', () => {
    cy.get('div')
    .should('have.class', 'single-movie-container')
    .contains('GO BACK')
  })

  it('Should display an error message when an invalid card id is in the url', () => {
    cy.visit('http://localhost:3000/581')
    cy.get('h2').contains('Sorry...Server Error 🤷‍♂️')
  })

  it('Should be able to click on GO BACK and take them back to the home screen', () => {
    cy.get('div')
    .should('have.class', 'single-movie-container')
    .contains('GO BACK').click()
    cy.url().should('not.eq', 'http://localhost:3000/694919')
  })
})