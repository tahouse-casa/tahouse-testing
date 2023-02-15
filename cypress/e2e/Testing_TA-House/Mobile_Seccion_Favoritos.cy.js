import Login from "../../pages/login"

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const urlTaHouseFavorites = 'https://dev.tahouse.casa/favorites-properties'
const urlAllproperties = 'https://dev.tahouse.casa/all-properties'
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

          it('F_002 | Check Elementos | Card div size', () => {// Se prueba el tamaños en divs contenedores de las cards
              cy.visit(urlTaHouseFavorites)
              cy.wait(2000).then(()=>{
                cy.Cardsize(0,'156px','158px')// Se espera: que el tamaño de la imagen sea "Width: 156px" y "height: 158px"
              })
          });
          
          it('F_003 | Check elementos', () => {// Se prueba la redireccion del button "/all-properties"
            cy.visit(urlTaHouseFavorites)
            cy.wait(2000).then(()=>{
                cy.get('a').eq(4).should('be.visible')// Se espera: que el btn de redireccion a /all-properties este visible
                cy.assertionCheck('Favoritas').should('be.visible')// Se espera: que el titulo Favoritos este visible
                cy.get('svg').eq(5).click().then(()=>{// Se espera: acceder a la lista de opciones para ordenar las cards segun:
                    cy.get('li').eq(0).should('contain','Orden alfabético')// Se espera: que este visible "Orden alfabetico"
                    cy.get('li').eq(1).should('contain','Más reciente')// Se espera: que este visible "Mas reciente"
                    cy.get('li').eq(2).should('contain','Más antiguo')// Se espera: que este visible "Mas antiguo"
                })
                cy.get('a').eq(4).should('be.visible')// Se espera: que el elemento Icon Back para redireccionar al home este visible
            })
          });

          it('F_004 | Lista de Opciones en Select para Ordenar Cards', () => {// Se prueba la lista de opciones para ordenar las Card segun la opcion elegida
            cy.visit(urlTaHouseFavorites)
            cy.wait(2000).then(()=>{
                cy.get('svg').eq(5).click().then(()=>{// Realizamos Click sobre la lista options
                    cy.get('li').eq(0).click()// Se Espera: ordenar por "Orden Alfabetico"
                })
                cy.get('svg').eq(5).click().then(()=>{// Realizamos Click sobre la lista options
                  cy.get('li').eq(1).click()// Se Espera: ordenar por "Mas Reciente"
                })
                cy.get('svg').eq(5).click().then(()=>{// Realizamos Click sobre la lista options
                  cy.get('li').eq(2).click()// Se Espera: ordenar por "Mas Antiguo"
                })
            })

          });
});