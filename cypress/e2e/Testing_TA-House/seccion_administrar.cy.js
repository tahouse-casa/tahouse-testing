import Admin from "../../pages/loginAdmin";

const admin = new Admin

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouse = 'https://dev.tahouse.casa'
const urlTaHouseProperty = 'https://dev.tahouse.casa/administration/properties'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'

describe('Panel Administracion', () => {
    beforeEach(() => {
        cy.session('login', () => {
            admin.loginAdmin(urlTaHouseLogin)
            cy.visit('/')
          }) 
    });

    it('U_001 | Eliminar Inmueble', () => {
        cy.visit(urlTaHouseProperty)
    });

    it('U_002 | Publicar Inmueble', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(7000)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo del Html
        cy.location().should((location)=>{
            expect(location.protocol).to.eq('https:')// Se espera: Validar el protocolo "https:"
            expect(location.pathname).to.eq('/administration/properties')// Se espera: Validar la ruta Path dentro de la app "/properties"
          })   

        cy.wait(1000)
        cy.get('.jIcsPA').click()
        cy.get('button').click()
        cy.selectGroup('Venta','Casa','Vendido','Argentina','Funes')// Se generan datos random en options
        cy.inputGroup1('av 22st',4,850,4,3,125000,'Excelente Ubicacion')// Se generan datos random en inputs de datos
        cy.get('button').click()
        cy.inputGroup2(11230002214746,'nuevo2@mail.com')// Se generan datos randon en inputs de datos
        cy.get('button').click()
        cy.contains('PUBLICAR').click({force:true})
        cy.contains('CONTINUAR').click()
    });

    it.only('U_000 | Check Elementos | ', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(4000)
          
    });
    
});