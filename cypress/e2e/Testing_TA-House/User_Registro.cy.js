import Login from "../../pages/login"

const login = new Login

describe('Testing 2do Sprint | Idea 5 | TA-House', () => {

    beforeEach(() => {
        cy.visit('https://dev.tahouse.casa/login')
       
  
      })

      it('Registro_001 | Login Exitoso', () => { // El usuario registrado en modo administrador pueda logearse correctamente al sistema
  
        login.UserLogin()

        cy.setCookie('foo', 'bar')
        cy.setCookie('foo1', 'bar1')
        cy.getCookie('foo').should('have.property', 'value', 'bar')

        cy.getCookies().should('have.length', 2)
        
      });

      

});