import Login from "../../pages/login"

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'
const pathCountries = '/administration/countries'

const login = new Login

describe('Mobile | Tests en Panel de administrar Paises',{  
    viewportWidth:380,viewportHeight:670},() => {

    beforeEach(() => {
        cy.session('login', () => {
            login.loginAdmin(urlTaHouseLogin)
          }) 
    });

    it('P_001 | Validaciones Html Request', () => {// Se prueban las props HTML
        cy.visit(urlTaHouseCountries)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo de la Pagina 
          expect(cy.config('viewportWidth')).to.equal(380)// Validamos MaxWhidth 380px
          expect(cy.config('viewportHeight')).to.equal(670)// Validamos MaxwHeight 670px
          cy.path('https:',pathCountries)// Se espera: Validar el protocolo "https:" y la ruta Path dentro de la app "/administration/countries"
          cy.url().should('equal',urlTaHouseCountries)// Se espera: Validar la URL 'https://dev.tahouse.casa/administration/countries'   
    });


    it('P_001 | Publicar Pais', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(4000).then(()=>{
            cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo del Html
            cy.location().should((location)=>{
            expect(location.protocol).to.eq('https:')// Se espera: Validar el protocolo "https:"
            expect(location.pathname).to.eq('/administration/countries')// Se espera: Validar la ruta Path dentro de la app "/coutries"
          }) 
        })

        cy.wait(1000).then(()=>{
            cy.get('.cbJJdJ').click()
            cy.addcountry('Alemania','Berlin')
            cy.longitud(11,35,92,34)
            cy.latitud(14,13,22,45)
            cy.get('button').click()
            cy.contains('CONTINUAR').click()
        })
         
    });

    it('Eliminar Pais', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(3000)
        cy.deleteInmueble()
        cy.get('button').eq(1).click()
         
    });

    it('Editar Pais', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(3000)
        cy.editPais()
       cy.findAllByText('Mexico')
        // cy.get('button').eq(1).click()
         
    });
});