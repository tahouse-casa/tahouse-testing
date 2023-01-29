
import Panel from '../../pages/panel'

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouse = 'https://dev.tahouse.casa'
const urlTaHouseProperty = 'https://dev.tahouse.casa/administration/properties'

const panel = new Panel

describe('Testing 2do Sprint | Panel Administracion - Imagenes', () => {

    beforeEach(() => {
        panel.loginAdmin()
        
      })

      it.only('Pruebas al Panel', () => {
        cy.get('nav').find('a').eq(2).click()
        cy.get('a').should('exist')
        
      });
    
});