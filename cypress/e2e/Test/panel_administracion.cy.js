
describe('Testing 2do Sprint | Idea 5 | TA-House', () => {

    beforeEach(() => {
        cy.visit('https://dev.tahouse.casa/')
        cy.get(':nth-child(3) > .sc-hLBbgP').click()
        cy.get('[name="email"]').type('admintahouse@mail.com')
        cy.get('[name="password"]').type('root123')
        cy.get('.sc-gJFNMl > .sc-knEsKG').click()
  
      })

      it('Pruebas al Panel', () => {
          
        cy.getCookie('token').should('have.property', 'value', '123ABC')

      });
    
});