import Home from '../../pages/home'

const home = new Home

describe('Testing del 1er Sprint Idea 5 - Bonpland', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/')

    })

    it('Web HTML Propiedades', () => { // Validamos las propiedades del HTML

      cy.request('http://localhost:3000/')
        .should((response)=>{
          expect(response.status).to.eq(200) // Validamos el estado de la conexion 
          expect(response).to.have.property('headers') // Validamos respuesta del Header
          expect(response.headers).to.have.property('content-type') // Validamos content-type
          
        })

      // Validoms tipo de documento web
      home.checkProperty('Bonplad','http://localhost:3000/')  // validamos el titulo pag y propiedades url ( direccion url,charset )
                                                              
    });

    it('A_001 - Pruebas de Api', () => { // Se probaran status y Endpoints

      home.bucle(9)
      // Prueba elementos Endpoints de Usuario en la tabla "Nombre de Usuario","Passwrord para Usuario","Nombre","Apellido","Apellido","Email","Ciudad","Pais","Telefono"//
      // Prueba elementos Endpoint en Inmuebles en la tabla "Id para inmuebles","Id para Img","Precio","Direccion","Ciudad","Pais","Tamñano Inmueble","Ambientes","Estado (REservado/Alquilado/Vendido),"Codigo de Zona","Fecha Publicacion","Tipo de Inmueble" 
      // Pruebas GET y POST

    });   

    it('H_001 - Filtro de Busqueda en Banner', ()=>{ // Mostrar inmuebles segun Pais filtrado

      home.search('mexico') // Prueba de Busquda en input "search" 

    
    })

    it('H_002 - Menu Navbar', ()=>{ // Mostrar logo, texto descriptivo, input ubicacion, secciones de la web

      // Prueba de Img logo segun diseño UI
      // Prueba icono menu Nav
      // Prueba Texto descriptivo "Encuentra el Hogar de tus Sueños"
      // Prueba de Filtro realizando busqueda
      // Texto descriptivo "En que ciudad desea Vivir"
      // Link acceso formulario

    })

    it('H_003 - Titulo Inmuebles Destacados', () => {
        // Prueba texto descriptivo en titulo contenedor Cards destacadas "Inmuebles Destacados"
      cy.contains('Inmuebles destacados').then((e)=>{
        let estado = e.text()
        if(estado == 'Inmuebles Destacados'){
          cy.log('El Titulo Contiene Inmuebles Destacados')
          cy.get('.sc-ckEbSK > .sc-gGvHcT').should('have.text',`${estado}`)//Probamos que el titulo no es correcto
        }else{
          cy.log('El titulo contiene "Inmuebles destacados"')
          cy.get('.sc-ckEbSK > .sc-gGvHcT').should('have.text','Inmueble Destacado')//Probamos que el titulo correcto
        }
      })
    });

    it.only('H_004 - Inmuebles Destacados | Elementos', ()=>{ // Se Probaran los textos y elementos dentro de las Card 

      // Pruebas de elementos indicando los criterios de aceptacion en las Card
      home.CheckDataCard('m2','amb','dorm','baños')// Check de texto "mt2","ambientes","dormitorios" en las Card  
      home.CheckDataCard2('usd') // Check de texto "Precio" en la Card
      home.checkDataCardPais('be.visible') // Check de "Pais" en las Card
      home.checkDataCardDir('exist')// Prueba de elemento "Direccion" dentro de la card
      home.checkDataCardFecha('be.visible')

      cy.fixture('locators').then((locator)=>{ 
        cy.get(locator.button).should('exist') // Prueba de elemento "Button" dentro de la card
        cy.get(locator.imagen).should('exist') // Prueba de elemento "Imagen" dentro de la card
      })
      // El carrousel debe contener los 5 mejores inmuebles de mayor a menor 
    })
    
    it('H_005 - Seccion Todas las Propiedades', ()=>{ // Mostrar un listado de inmuebles en promocion

      //Prueba imagen de fondo segun diseño UI
      //Mostrar Titulo de seccion "Todas las Propiedades"
      //Mostrar un Filtro de Busqueda en Banner
      //Mostrar elementos de Paginacion
      //Mostrar Footer Informativo de la Inmobiliaria
    })
    
    it('H_005 - Footer Informativo', ()=>{ // Mostrar footer en forma de acordeon con sus 4 menuces, logo y posicion de elementos en el Dom segun diseño UI

      cy.fixture('locators').then((locator)=>{
        cy.get(locator.footerItemHomeTit).should('be.visible').and('have.text','Bonplad') //Prueba de Contenido en el Titulo del Footer
      })

      home.checkFooter1('Sobre nosotros')// Prueba de Contenido y despliegue "Sobre Nosotros"
      home.checkFooter3('Paises') // Prueba de Contenido y despliegue de "Paises"
      home.checkFooter4('Categorias') //Prueba de Contenido y despliegue de "Categorias"
      home.checkFooter2('Nuestra Trayectoria') // Prueba de Contenido y despliegue "Nuestra Trayectoria"    

    })

    it('H_006 - Check de todos los elementos diseñados en seccion Home', ()=>{ //Checkeamos todos lo elementos del dom existentes segun diseño UI

      // Prueba de todos los elementos del Dom
    })  
 
    it('H_007 - Seccion Guia en el Home', () => { //Mostrar una Guia al usuario para alquilar y/o comprar inmuebles

      // Prueba de Imagen y Texto correspondiente segun diseño UI
      // Prueba de Button "Guia para Alquilar y Guia para Vender"
      // Al realizar click se muestra informacion sobre la venta y/o alquiler del Inmueble
      // Probamos seleccion Alquilar aplicando Filtros, al ecribir una ciudad se agruparan por dicha eleccion 
      // Probamos seleccion Vender aplicando Filtros
    });

    it('Formulario de Busqueda para Inmuebles', () => { // Mostrar todos los inmuebles que coincidan con el criterio de busqueda realizado por el Usuario
      
      // Prueba Button con filtro desplegable motrando la siguiente lista "Ciudad", "Ambientes", "Cantidad de Baños", "Cantidad de Habitaciones","Mts2 max y min"
      // Prueba Button con el nombre del Mapa mostrando la Ubicacion/Direccion del Inmueble
      // Filtramos por Ciudad mostrando ciudad buscada y quedar seleccionada
      // Filtramos por cantidad de Ambientes y validando que sean numeros enteros
      // Filtramos por cantidad de Habitaciones y validando que sean numeros enteros
      // Filtramos por cantidad de Baños y validando que sean numeros enteros
      // Filtramos por Mts2 Min/Max y validando que se sean 
    });

     
})

describe('Testing Exploratorio seccion Home', () => {
    
  beforeEach(() => {
      
  });

  it('CP en Api', () => {
      
  });

  it('CP en Login', () => { // Pruebas de login Positivo y Negativo
      
  });

  it('CP en Formulario de Registro', () => { // Se realizaran distintas pruebas en todos los campos de datos del Formulario (Casos de pruebas Positivos y Negativos)
      
  });

  it('CP en Formulario de Busqueda', () => { // Se realziaran pruebas de filtrado en los campos de Busqueda
      
  });

  it('CP comprobando todos los elementos del Dom', () => {
      
  });

  it('CP comprobando Textos Descriptivos', () => {
      
  });

  it('CP en Menu Navbar', () => {
      
  });

  it('CP en Footer', () => {
      
  });

});
