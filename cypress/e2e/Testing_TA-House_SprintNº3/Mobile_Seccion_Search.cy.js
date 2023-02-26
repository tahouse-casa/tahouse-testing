import Login from "../../pages/login"

const login = new Login
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'

describe('Mobile | Tests en Filtro de Busqueda | Home', {  
    viewportWidth:380,viewportHeight:670},() => {
        
    beforeEach(() => {
        login.loginAdmin(urlTaHouseLogin)
    });

    it('Mobile | Busqueda por Pais', () => {// Probamos el filtro de busqueda ingresando un pais random
        cy.typeInputName('country','usa')// Se espera: el filtro encuentre todos los inmuelbes segun pais ingresado existente en la BD
        cy.contains('Buscar').click()// Realizamos click en Buscar
    });

    it('Mobile | Resultado por Ambientes', () => {// Probamos que se muestre el total de inmuebles buscados en el filtro
       cy.ResultSearch('Departamentos en alquiler','USA')// Se espera: mostrar el rusultado de la busqueda en pantalla indicando cantidad y pais 
       cy.contains('Filtros').click()
       cy.FilterOption(1,4)
       cy.get('button').eq(2).click()

    });

    it('Mobile | Resultado por Baños', () => {// Probamos que se muestre el total de inmuebles buscados en el filtro
        cy.ResultSearch('Departamentos en alquiler','USA')// Se espera: mostrar el rusultado de la busqueda en pantalla indicando cantidad y pais 
        cy.contains('Filtros').click()
        cy.FilterOption(2,3)
        cy.get('button').eq(2).click()
        
     });

     it('Mobile | Resultado por Habitaciones', () => {// Probamos que se muestre el total de inmuebles buscados en el filtro
        cy.ResultSearch('Departamentos en alquiler','Argentina')// Se espera: mostrar el rusultado de la busqueda en pantalla indicando cantidad y pais 
        cy.contains('Filtros').click()
        cy.FilterOption(3,4)
        cy.get('button').eq(2).click()
     });

     it('Mobile | Resultado por Precio', () => {// Probamos que se muestre el total de inmuebles buscados en el filtro
        cy.ResultSearch('Departamentos en alquiler','Argentina')// Se espera: mostrar el rusultado de la busqueda en pantalla indicando cantidad y pais 
        cy.contains('Filtros').click()
        cy.FilterOption(4,100000)
        cy.get('button').eq(2).click()
     });

     it('Mobile | Resultado por Mts2', () => {// Probamos que se muestre el total de inmuebles buscados en el filtro
        cy.ResultSearch('Departamentos en alquiler','USA')// Se espera: mostrar el rusultado de la busqueda en pantalla indicando cantidad y pais 
        cy.contains('Filtros').click()
        cy.FilterOption(5,500)
        cy.get('button').eq(2).click()
     });

     it('Mobile | Resultado con todos los filtros completos', () => {// Probamos que se muestre el total de inmuebles buscados en el filtro
        cy.ResultSearch('Departamentos en alquiler','Argentina')// Se espera: mostrar el rusultado de la busqueda en pantalla indicando cantidad y pais 
        cy.contains('Filtros').click()
        cy.FilterOption(2,3)
        cy.FilterOption(3,3)
        cy.FilterOption(4,150)
        cy.FilterOption(5,115000)
        cy.get('button').eq(2).click()
     });
    
});