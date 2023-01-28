
import Admin from "../../pages/loginAdmin";

const admin = new Admin
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouse = 'https://dev.tahouse.casa'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'

describe('Panel Countries', () => {
    beforeEach(() => {
        cy.session('login', () => {
            admin.loginAdmin(urlTaHouseLogin)
            cy.visit('/')
          }) 
    });

    it('U_001 | Publicar Pais', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(4000)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo del Html
        cy.location().should((location)=>{
            expect(location.protocol).to.eq('https:')// Se espera: Validar el protocolo "https:"
            expect(location.pathname).to.eq('/administration/countries')// Se espera: Validar la ruta Path dentro de la app "/coutries"
          }) 

          cy.get('.cbJJdJ').click()
          cy.addcountry('Mexico','Cancun')
          cy.longitud(11,35,92,34)
          cy.latitud(14,13,22,45)
          cy.get('button').click()
          cy.contains('CONTINUAR').click()
    });

    it('Eliminar Pais', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(3000)
        cy.deleteInmueble()
        cy.get('button').eq(1).click()
         
    });

    it.only('Editar Pais', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(3000)
        cy.editPais()
       
        // cy.get('button').eq(1).click()
         
    });
});