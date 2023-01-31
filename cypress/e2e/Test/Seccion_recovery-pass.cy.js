

const urlRecoverypass = 'https://dev.tahouse.casa/recovery-password'

describe('Testing 3er Sprint | Pruebas en Seccion Recovery-Pass',{  
  viewportWidth:380,viewportHeight:670},() => {

    beforeEach(() => {
        cy.session('login',()=>{
            cy.visit('/')
            expect(cy.config('viewportWidth')).to.equal(380)
            expect(cy.config('viewportHeight')).to.equal(670)
          }) 
    });

    it('Recovery_001 | Check Elementos | Recovery-Pass', () => {
        cy.visit('/recovery-password')
        cy.title().should('include', 'TaHouse.casa')
        cy.url().should('equal',urlRecoverypass)
        cy.assertionCheck('Recuperar contraseña')
        cy.assertionCheck('Ingresa la dirección de email')
        cy.get('[name="sendEmail"]').should('have.attr','placeholder','Email')
        cy.assertionCheck('ENVIAR').click()
        cy.assertionCheck('¿No recibiste el correo aún?')
        cy.assertionCheck('Puedes reintentarlo')
      });

      it('Recovery_002 | Recupero Contraseña Exitoso', () => {
          cy.visit('recovery-password')
          cy.get('[name="sendEmail"]').should('have.attr','placeholder','Email').type('nuevo@mail.com')
          cy.assertionCheck('ENVIAR').click()
          cy.wait(3000).then(()=>{
            cy.msjAviso('El mail fue enviado con éxito','be.visible')
            cy.assertionCheck('CONTINUAR').click()
          })
          
      });

});