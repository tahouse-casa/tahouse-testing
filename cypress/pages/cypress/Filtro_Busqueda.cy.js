import Home from '../home'

const home = new Home


describe('Casos de Prueba en Filtro de Busqueda', () => {

  beforeEach(() => {
    cy.visit('https://dev.tahouse.casa/')

  })
  
    it.only('B_001 Filtro de Busqueda | Contenido ', () => { // Mostrar todos los inmuebles que coincidan con el criterio de busqueda realizado por el Usuario
        home.search('Argentina') // Accedemos al filtro buscando por pais "Argentina"
        // home.inputsMts2(5) // Se Espera: un total de 5 inputs dentro del Form de Filtro "Cantidad de Ambientes", "Cantidad de Baños", "Cantidad de Habitaciones", "Precio", "Mts2"

      });
  
      it('B_002 Filtro de Busqueda | Button Submit y Button Clear', () => {
        home.search('Argentina')
        home.checkBtnFilter1('Button Submit y Button Clear') // Se Espera: Un button para confirmar datos ingresados en Filtro 
       
      });
  
      it('B_003 Filtro de Busqueda | Ubicacion (Maps)', () => { // Mostrar Button Maps y ubicacion del inmueble
        home.search('Argentina')
        home.checkBtnMap('Mapa','be.visible') // Se Espera: Que el Button contenga el nombre "Mapa" y al realizar click el mismo se despliegue
        
      });
  
      it('B_004 Filtro de Busqueda | Cantidad de Ambientes', () => { // Mostrar el texto "Cantidad de Amibentes" y su inputs para solicitar datos      
        home.search('Argentina')
        // home.checkInputAmb('be.visible','Cantidad de ambientes') // Se Espera: Que el Button contenga el nombre "Cantidad de Ambientes" y su input de busqueda
        cy.get('.jQOtLM').click()
        
      });
  
      it('B_005 Filtro de Busqueda | Cantidad de Habitaciones', () => { // Mostrar el texto "Cantidad de Habitaciones" y su inputs para solicitar datos       
        home.search('Argentina')
        home.checkInputDorm('be.visible','Cantidad de habitaciones')
  
      });
  
      it('B_006 Filtro de Busqueda | Cantidad de Baños', () => { // Mostrar el texto "Cantidad de Baños" y su inputs para solicitar datos     
        home.search('Argentina')
        home.checkInputBaños('be.visible','Cantidad de baños')
          
      });
  
      it('B_007 Filtro de Busqueda | Cantidad de Mts2', () => { // Mostrar el texto "Cantidad de Mts2" y su inputs para solicitar datos      
        home.search('Argentina')
        
      });
  
      it('B_008 Filtro de Busqueda | Lista Paises', () => { // Mostrar un inputs tipo Option con los Paises      
        home.search('Argentina')
        home.checkInputsPais('País')
      });
  
      it('B_009 Filtro de Busqueda | Precio', () => { // Mostrar un inputs tipo Option con los Paises      
        home.search('Argentina')
        home.checkInputPrecio('be.visible','Precio')
  
      });
});