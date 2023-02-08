import Login from "../../pages/login"

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouseFavorites = 'https://dev.tahouse.casa/favorites-properties'
const pathFavorites = '/favorites-properties'

const login = new Login

describe('Mobile | Test en Seccion Favoritos', {  
    viewportWidth:380,viewportHeight:670},() => {

        beforeEach(() => {
            cy.session('login', () => {
                login.loginAdmin(urlTaHouseLogin)
              }) 
        });

        it('F_001 | Validaciones Html Request', () => {// Se prueban las props HTML
            cy.visit(urlTaHouseFavorites)
            cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo de la Pagina 
              expect(cy.config('viewportWidth')).to.equal(380)// Validamos MaxWhidth 380px
              expect(cy.config('viewportHeight')).to.equal(670)// Validamos MaxwHeight 670px
              cy.path('https:',pathFavorites)// Se espera: Validar el protocolo "https:" y la ruta Path dentro de la app "/login"
              cy.url().should('equal',urlTaHouseFavorites)// Se espera: Validar la URL 'https://dev.tahouse.casa/login'   
          });

          it('F_002 | Check Elementos', () => {
              
          });
    
});