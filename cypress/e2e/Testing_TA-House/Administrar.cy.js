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

    it.only('U_001 | Eliminar Inmueble', () => {
        cy.visit(urlTaHouseProperty)
        
    });

    it('U_002 | Publicar Inmueble', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(5000)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo del Html
        cy.location().should((location)=>{
            expect(location.protocol).to.eq('https:')// Se espera: Validar el protocolo "https:"
            expect(location.pathname).to.eq('/administration/properties')// Se espera: Validar la ruta Path dentro de la app "/register"
          })   

        cy.wait(2000)
        cy.get('.leJsSn').click()
        cy.get('button').click()
        cy.selectGroup('Alquiler','Departamento','Alquilado','Argentina','Funes')
        cy.inputGroup1('av 11st',4,150,3,3,99000,'Excelente Ubicacion')
        cy.get('button').click()
        cy.inputGroup2(11236547968746,'nuevo1@mail.com')
        cy.get('button').click()
        cy.contains('PUBLICAR').click({force:true})
        cy.contains('CONTINUAR').click()
    });

    it('U_001 | Eliminar Inmueble', () => {
        
    });


    
});