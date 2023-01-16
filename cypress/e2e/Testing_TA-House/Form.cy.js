import Login from "../../pages/login"

const login = new Login

describe('Testing 2do Sprint | Form Registro', () => {

    beforeEach(() => {
        cy.visit('https://dev.tahouse.casa/login')
       
  
      })

      it('Registro_001 | Login Exitoso', () => { // El usuario registrado en modo administrador pueda logearse correctamente al sistema
  
        login.UserLogin('admintahouse@mail.com','root123')//Login Modo Administrador
        login.UserLogin()

        cy.setCookie('foo', 'bar')
        cy.setCookie('foo1', 'bar1')
        cy.getCookie('foo').should('have.property', 'value', 'bar')
        cy.getCookies().should('have.length', 2)
        
      });

      it('Resgistro_002 | Registro Exitoso',()=>{

        

      })

      

});