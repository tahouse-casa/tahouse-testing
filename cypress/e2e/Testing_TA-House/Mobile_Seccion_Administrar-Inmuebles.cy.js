import Login from "../../pages/login";

const login = new Login
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouseProperty = 'https://dev.tahouse.casa/administration/properties'
const urlTaHouseCountries = 'https://dev.tahouse.casa/administration/countries'
const pathAdminProperties = '/administration/properties'
const pathAdminCountries = '/administration/countries'
const apiProperties = 'https://api.dev.tahouse.casa/api/v1/properties'

describe('Mobile | Tests en Panel de Administrar Inmueble', {  
    viewportWidth:380,viewportHeight:670},() => {
        
    beforeEach(() => {
        cy.session('login', () => {
            login.loginAdmin(urlTaHouseLogin)
        }) 
    });

    it('U_001 | Validaciones Html Request', () => {// Se prueban las props HTML
        cy.visit(urlTaHouseProperty)
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo de la Pagina 
        expect(cy.config('viewportWidth')).to.equal(380)// Validamos MaxWhidth 380px
        expect(cy.config('viewportHeight')).to.equal(670)// Validamos MaxwHeight 670px
        cy.path('https:',pathAdminProperties)// Se espera: Validar el protocolo "https:" y la ruta Path dentro de la app "/administration/properties"
        cy.url().should('equal',urlTaHouseProperty)// Se espera: Validar la URL 'https://dev.tahouse.casa/administration/properties'   
    });

    it('U_002 | Check Elementos | ', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
            cy.assertionCheck('INMUEBLES').should('be.visible')
            cy.assertionCheck('USUARIOS').should('be.visible')
            cy.assertionCheck('PAÍSES').should('be.visible')
        })
          
    });

    it('U_003 | Publicar Inmueble', () => {// Se prueba la publicacion exitosa de un Inmueble
        cy.visit(urlTaHouseProperty)
        cy.wait(3000).then(()=>{
            cy.get('.icon-of-create-properties').click()// Relizamos click sobre el icono svg "+"
            cy.get('button').click()// Realizamos click en siguiente
            cy.selectGroup('Venta','Hotel','Libre','USA','California')// Se generan datos random en options
            cy.inputGroup1('av 51st',3,150,3,3,115000,'Excelente Ubicacion')// Se generan datos random en inputs de datos
            cy.get('button').click()// Realizamos click en siguiente
            cy.inputGroup2(1122347691746,'nuevo11@mail.com')// Se generan datos randon en inputs de datos
            cy.get('button').click()
            cy.contains('PUBLICAR').click({force:true})
            cy.contains('CONTINUAR').click()
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
            cy.selectGroup('Venta','Terreno','Alquilado','USA','California')// Se generan nuevos datos random en options
            cy.clearInputsGroup1()// Se realiza un clear sobre todos los campos de datos en inmuebles
            cy.inputGroup1('av 12st',3,600,4,3,125000,'Excelente Ubicacion')// Se generan nuevos datos random en inputs 
            cy.get('button').click()// Realizamos clieck en "Siguiente"
            cy.clearInputsGroup2()// Se realiza un clear sobre todos los campos de datos en contacto
            cy.inputGroup2(9341568532451,'nuevo55@mail.com')// Se generan datos randon en inputs de datos
            cy.assertionCheck('VISTA PREVIA').click({force:true})
            cy.contains('PUBLICAR').click({force:true})
            cy.contains('CONTINUAR').click()
        })
    });

    it('U_006 | Filtro de Busqueda', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
            
        })
        
    });
    
});