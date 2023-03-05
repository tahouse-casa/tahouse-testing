import Login from "../../pages/login"

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'
const pathCountries = '/administration/countries'

const login = new Login

describe('Mobile | Tests en Panel de administrar Paises',{  
    viewportWidth:380,viewportHeight:670},() => {

    beforeEach(() => {
        login.loginAdmin(urlTaHouseLogin)     
    });

    it('P_001 | Validaciones Html Request', () => {// Se prueban las props HTML
        cy.visit(urlTaHouseCountries)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo de la Pagina 
          expect(cy.config('viewportWidth')).to.equal(380)// Validamos MaxWhidth 380px
          expect(cy.config('viewportHeight')).to.equal(670)// Validamos MaxwHeight 670px
          cy.path('https:',pathCountries)// Se espera: Validar el protocolo "https:" y la ruta Path dentro de la app "/administration/countries"
          cy.url().should('equal',urlTaHouseCountries)// Se espera: Validar la URL 'https://dev.tahouse.casa/administration/countries'   
    });


    it('P_002 | Publicar Pais / Ciudad', () => {// Se prueba publicar un nuevo pais exitosamente
        cy.visit(urlTaHouseCountries)
        cy.wait(2000).then(()=>{
            cy.get('.fjUtIG').click({force:true})// Relizamos click sobre el signo "+"
            cy.addcountry('ECUADOR','Quito')// Completamos los campos de datos "Pais" y "Ciudad"
            cy.longitud(11,35,92,34)// Completamos con datos random los campos de datos longitud
            cy.latitud(14,13,22,45)// Completamos con datos random los campos de datos latitud
            cy.get('button').click()// Realizamos click en "Guardar"
            cy.contains('CONTINUAR').click({force:true})// Confirmamos la publicacion
        })
         
    });

    it('P_003 | Eliminar Pais / Ciudad', () => {// Se prueba eliminar exitosamente el 1er pais de la lista "Paises"
        cy.visit(urlTaHouseCountries)
        cy.wait(2000).then(()=>{
            cy.deletecountry(10)// Realizamos click sobre el 1er elemento "pais" de la lista
            cy.get('button').eq(1).click()// Realizamos click en "ELIMINAR"
        })  
         
    });

    it('P_004 | Editar Pais / Ciudad', () => {// Se prueba editar exitosamente el 1er pais y/o ciudad de la lista "Paises"
        cy.visit(urlTaHouseCountries)
        cy.wait(2000).then(()=>{
            cy.editCountry(9)// Realizamos click en el icono "edit"
            cy.clearCountry()// Realizamos un clear en los campos de datos pais y ciudad
            cy.clearLatitud()// Realizamos un clear en campos de datos de latitud
            cy.clearLongitud()// Realizamos un clear en campos de datos de longitud
            cy.addcountry('PORTUGAL','Lisboa')// Completamos en campo de datos pais y ciudad
            cy.longitud(54,15,66,11)// Completamos campo de datos seccion "Longitud"
            cy.latitud(80,63,11,99)// Completamos campo de datos seccion "Latitud"
            cy.get('button').click()// Realizamos click en "Guardar"
            cy.contains('CONTINUAR').click()// Confirmamos la publicacion
        }) 
    });

});