import Login from "../../pages/login";

const login = new Login
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouseProperty = 'https://dev.tahouse.casa/administration/properties'
const pathAdminProperties = '/administration/properties'

describe('Mobile | Tests en Panel de Administrar Inmueble', {  
    viewportWidth:380,viewportHeight:670},() => {
        
    beforeEach(() => {
        login.loginAdmin(urlTaHouseLogin)
    });

    it('U_001 | Validaciones Html Request', () => {// Se prueban las props HTML
        cy.visit(urlTaHouseProperty)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo de la Pagina 
        expect(cy.config('viewportWidth')).to.equal(380)// Validamos MaxWhidth 380px
        expect(cy.config('viewportHeight')).to.equal(670)// Validamos MaxwHeight 670px
        cy.path('https:',pathAdminProperties)// Se espera: Validar el protocolo "https:" y la ruta Path dentro de la app "/administration/properties"
        cy.url().should('equal',urlTaHouseProperty)// Se espera: Validar la URL 'https://dev.tahouse.cºasa/administration/properties'   
    });

    it('U_002 | Check Elementos', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
            cy.assertionCheck('INMUEBLES').should('be.visible')
            cy.assertionCheck('USUARIOS').should('be.visible')
            cy.assertionCheck('PAÍSES').should('be.visible')
        })
          
    });

    it('U_003 | Publicar Inmueble', () => {// Se prueba la publicacion exitosa de un Inmueble
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
            cy.get('.icon-of-create-properties').click()// Relizamos click sobre el icono svg "+"
            cy.get('button').click()// Realizamos click en siguiente
            cy.selectGroup('Venta','Casa','Vendido','Argentina','Villa Gesell')// Se generan datos random en options
            cy.inputGroup1('av 10st',2,155,3,2,93000,'Excelente Ubicacion')// Se generan datos random en inputs de datos
            cy.get('button').click()// Realizamos click en siguiente
            cy.inputGroup2(11223366746,'nuevo18@mail.com')// Se generan datos randon en inputs de datos
            cy.get('button').click()
            cy.contains('PUBLICAR').click({force:true})
            cy.contains('CONTINUAR').click({force:true})
        })      
    });

    it('U_004 | Eliminar Inmueble', () => {// Se prueba la eliminacion de un inmuelbe en la 1er ubicaion de la lista
       cy.visit(urlTaHouseProperty)
       cy.wait(2000).then(()=>{
        cy.get('.kMUvhG').eq(1).click()
        cy.get('button').eq(1).click({force:true})
        cy.contains('CONTINUAR').click({force:true})
       })
    });

    it('U_005 | Editar Inmueble', () => {// Se prueba la edicion del 1er inmueble de la lista modificando todos sus datos ingresado previamente
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
            cy.get('.gysgEo').eq(0).click()// Realizamos Click sobre la 1er card de inmueble existente
            cy.get('button').eq(0).click({force:true})
            cy.selectGroup('Venta','Hotel','Vendido','USA','California')// Se generan nuevos datos random en options
            cy.clearInputsGroup1()// Se realiza un clear sobre todos los campos de datos en inmuebles
            cy.inputGroup1('av 13st',2,250,2,2,99000,'Excelente Ubicacion')// Se generan nuevos datos random en inputs 
            cy.get('button').click()// Realizamos clieck en "Siguiente"
            cy.clearInputsGroup2()// Se realiza un clear sobre todos los campos de datos en contacto
            cy.inputGroup2(9341568532451,'nuevo55@mail.com')// Se generan datos randon en inputs de datos
            cy.assertionCheck('VISTA PREVIA').click({force:true})
            cy.contains('PUBLICAR').click({force:true})
            cy.contains('CONTINUAR').click()
        })
    });
  
});