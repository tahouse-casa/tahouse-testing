import Login from "../../pages/login"

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouse = 'https://dev.tahouse.casa'
const urlTaHouseProperty = 'https://dev.tahouse.casa/administration/properties'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'
const apiProperties = 'https://api.dev.tahouse.casa/api/v1/properties'

const login = new Login

describe('Tests en Panel de administrar Paises',{  
    viewportWidth:380,viewportHeight:670},() => {

    beforeEach(() => {
        cy.session('login', () => {
            login.loginAdmin(urlTaHouseLogin)
          }) 
    });

    it('Api Countries', () => {
        cy.visit(urlTaHouse)
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
            expect(e).property('status').to.equal(200)
            expect(e.body[0]).property('address').to.be.a('string')
            expect(e.body[0]).property('bathrooms').to.be.a('number')
            expect(e.body[0]).property('city').to.be.a('string')
            
            console.log(e.body)
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