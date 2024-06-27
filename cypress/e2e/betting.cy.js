// cypress/integration/soccabet_tests.spec.js

describe('Soccabet Tests', () => {
  beforeEach(() => {
    cy.visit('https://www.soccabet.com')
  })

  it('TC001: User places a single bet', () => {
    cy.get('a:contains("Sports")').click()
    cy.contains('Soccer').click({ force: true })
    cy.get('div.nav-featured-panel').invoke('css', 'display', 'block')
    cy.contains('England').scrollIntoView().should('be.visible').click({ force: true })
    cy.contains('Man. United').click()
    cy.get('.ng-tns-c129-36.match-odd > .markets-page').click()
    cy.get('.betslip-arrow').click()
    cy.get('.beto-betslip > .betslip-wrapper > .betslip-container > .betslip-bets-container > .betslip-events-wrapper > app-betslip-event.ng-star-inserted > .bet-container > .betslip-match-content > .bet-stake-payout > .amount-input > .stake > .bet-stake-input > .numeric-input-wrapper > .input-amount').type('10')
    cy.get('#betslip-place-bet-button').click()
  })

  it('TC006: Registers a new user successfully', () => {
  
    cy.get('.widgets-c2326458 > .beto-content-block > .ng-star-inserted').click()
    cy.get('.button-undefined > .button-label').click()
    cy.get('app-phone-field.ng-star-inserted > .form-row').type('123654789')
    cy.get('.fld-password > app-password-field.ng-star-inserted > .form-row').type('test1234')
    cy.get('.fld-verifypassword > app-password-field.ng-star-inserted').type('test1234')
    cy.get('.fld-firstname > app-text-field.ng-star-inserted > .form-row').type('Tester')
    cy.get('.fld-lastname > app-text-field.ng-star-inserted > .form-row').type('Testing')
    cy.get('.fld-email > app-text-field.ng-star-inserted > .form-row').type('tester1@gmail.com')
    cy.get(':nth-child(7) > app-select-field.ng-star-inserted > .ng-invalid').click()
    cy.contains('Passport ID').click( {force: true})
    cy.get(':nth-child(8) > app-text-field.ng-star-inserted > .form-row').type('BB123654')
    cy.get('#bp58q-dateOfBirth > :nth-child(1)').click( {force: true})
    cy.contains('3').click( {force: true})
    cy.get('#c85om-dateOfBirth > :nth-child(2)').click( {force: true})
    cy.contains('Mar').click( {force: true})
    cy.get('#c85om-dateOfBirth > :nth-child(3)').click( {force: true})
    cy.contains('2000').click( {force: true})
    cy.get('#c85om-referralCode').type('12365')
    cy.get('.fld-terms > app-checkbox-field.ng-star-inserted > .checkbox-wrapper > .ng-untouched > .ui-chkbox > .ui-chkbox-box').click()
    cy.get('.fld-marketingsubscribe > .ng-star-inserted > .checkbox-wrapper > .ng-untouched > .ui-chkbox > .ui-chkbox-box').click()
    cy.get('.button-submit-register').click()
    

  })

  
})