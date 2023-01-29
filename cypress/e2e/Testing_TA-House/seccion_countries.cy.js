
import Admin from "../../pages/loginAdmin";

const admin = new Admin
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouse = 'https://dev.tahouse.casa'
const urlTaHouseProperty = 'https://dev.tahouse.casa/administration/properties'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'

describe('Panel Countries', () => {
    beforeEach(() => {
        cy.session('login', () => {
            admin.loginAdmin(urlTaHouseLogin)
            cy.visit('/')
          }) 
    });

    it('Api Countries', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(2000).then(()=>{
            fetch('https://api.dev.tahouse.casa/api/v1/countries')
            .then((res)=>res.json())
            .then((data)=>{ 
                data.map((e)=>{
                    console.log(e.country)

                })
            })    
        })
    });

    it.only('Api Inmueble', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
         cy.request('GET','https://api.dev.tahouse.casa/api/v1/properties')
        }).then((e)=>{
            let body = e.body[0].typeOperation

            console.log(body) 
            cy.get('.jIcsPA').click()
            cy.get('button').click()
            cy.get('select').eq(0).select(body).should('contain','')
            
        })
    });

    it('U_001 | Publicar Pais', () => {
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
            cy.addcountry('Mexico','Cancun')
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