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

    it('U_002 | Publicar Inmueble', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(3000).then(()=>{
            cy.get('.cMYiAX').click()
            cy.get('button').click()
            cy.selectGroup('Venta','Casa','Vendido','España','Alicante')// Se generan datos random en options
            cy.inputGroup1('av 33st',4,550,4,4,140000,'Excelente Ubicacion')// Se generan datos random en inputs de datos
            cy.get('button').click()
            cy.inputGroup2(11230002214746,'nuevo2@mail.com')// Se generan datos randon en inputs de datos
            cy.get('button').click()
            // cy.contains('PUBLICAR').click({force:true})
            cy.contains('CONTINUAR').click()
        })      
    });

    it('U_000 | Check Elementos | ', () => {
        cy.visit(urlTaHouseCountries)
        cy.wait(4000)
          
    });

    it('U_001 | Eliminar Inmueble', () => {
       

    });

    
});