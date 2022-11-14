import Home from '../../pages/home'

const home = new Home

describe('Testing 1er Sprint | Idea 5 - Bonpland', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/')

    })

    it('W_001 - Html | XHR request', () => { // Validamos las propiedades del HTML
      cy.request('http://localhost:3000/')
        .should((response)=>{
          expect(response.status).to.eq(200) // Se Espera: que el estado de la conexion sea 200
          expect(response).to.have.property('headers') // Se Espera: que exista el header 
          expect(response.headers).to.have.property('content-type') // Se Espera: que exista el content-type 
          expect(response).to.have.property('duration')
        })

        home.checkProperty('http://localhost:3000/')  // Se Espera: que la url y charset "UTF-8" sean correctos 
    });

    it('W_002 - Html | Titulo', () => { // Validacion web y prop HTML
      home.checkProperty('Bonpland')  // Se Espera: que el titulo de la pag sea Bonpland

    });


    it('A_001 - Pruebas de Api', () => { // Se probaran status y Endpoints
      // Prueba elementos Endpoints de Usuario en la tabla "Nombre de Usuario","Passwrord para Usuario","Nombre","Apellido","Apellido","Email","Ciudad","Pais","Telefono"//
      // Prueba elementos Endpoint en Inmuebles en la tabla "Id para inmuebles","Id para Img","Precio","Direccion","Ciudad","Pais","Tamñano Inmueble","Ambientes","Estado (REservado/Alquilado/Vendido),"Codigo de Zona","Fecha Publicacion","Tipo de Inmueble" 
      // Pruebas GET y POST
      home.bucle(3)
    });   

    it('H_001 - Filtro de Busqueda en Banner', ()=>{ // Mostrar inmuebles segun Pais filtrado
      home.search('uruguay') // Se espera: que el filtro busque por pais ingresado en "Search"
    
    })

    it('H_002 - Titulo Inmuebles Destacados | Contenido', () => {
        // Prueba de texto descriptivo en titulo del card container 
      // Se Espera: que el titulo sea "Inmuebles Destacados"
      home.checkTitulo1('Inmuebles Destacados')

    });

    it('H_003 - Inmuebles Destacados | Elementos en Cards', ()=>{ // Se Probaran los textos y elementos dentro de las Card 
      // El carrousel debe contener los 5 mejores inmuebles de mayor a menor 
      // Pruebas de elementos indicando los criterios de aceptacion en las Card
      home.CheckDataCard('m2','amb','dorm','baños')// Se Espera: que el elemento "mt2","ambientes","dormitorios" existan 
      home.CheckDataCard2('usd') // Se Espera: que el elemento "Precio" exista
      home.checkDataCardPais('be.visible') // Se Espera: que el elemento "Pais" exista
      home.checkDataCardDir('be.visible')// Se Espera: que el elemento "Direccion" exista
      home.checkDataCardFecha('be.visible')// Se Espera: que el elemento "Fecha" exista
      home.checkDataCardImg('be.visible') // Se Espera: que el elemento "Imagen" exista
      home.checkDataCardBtn('be.visible') // Se Espera: que el elemento "Button" exista
      home.checkCardsLimit2(5) // Se Espera: que la cantidad de Cards a mostrar sean 5

    })

    it.only('H_004 - Footer Informativo | Contenido', ()=>{ // Mostrar footer en forma de acordeon con sus 4 menuces y logo
      home.checkFooter1('Sobre nosotros',"be.visible")// Se Espera: que el subtitulo "Sobre Nosotros" y el despliegue del texto existan
      home.checkFooter3('Paises','be.visible') // Se Espera: que el subtitulo "Paises" y despliegue del texto existan 
      home.checkFooter4('Categorias','be.visible') // Se Espera: que el subtitulo "Categorias" y despliegue del texto existan
      home.checkFooter2('Nuestra Trayectoria','be.visible') // Se Espera: que el subtitulo "Nuestra Trayecoria" y despliegue del texto existan   
  
    })

    it.only('H_005 Footer Informativo | Titulo', () => {
      cy.fixture('locators').then((locator)=>{
        cy.get(locator.footerItemHomeTit).should('be.visible').and('have.text','Bonpland') // Se Espera: que el titulo/logo exista

      }) 

    });

    it('H_006 Seccion Guia en el Home', () => { // Mostrar una Guia al usuario para alquilar y/o comprar inmuebles
      cy.contains('Guia de compra').click()// Se Espera: un button de nombre "Guia de Compra"
      home.checkTitulosGuia('exist') // Se Espera: que los elementos titulos y Subtitulos existan en seccion "Guia de Compras"
      home.checkTextSub('be.visible') // Se Espera: que el texto descriptivo debajo de los Subtitlos exista
      
    });

    it('H_007 Seccion Todas las Propiedades | Elementos en Home ', ()=>{ // Mostrar un listado de inmuebles en promocion
      home.chechitems2('be.visible') // Se Espera: que los elementos "Imagen de fondo","logo","texto descriptivo" y "button" existan
      
    })

    it('H_008 Seccion Todas las Propiedades | Filter', () => {
      home.checkFilter1('filter') // Se Espera: que exista un filtro de Busqueda en seccion "Todas las Propiedades"

    });

    it('H_009 Seccion Todas las Propiedades | Paginacion', () => {
      home.checkPaginacion1('paginacion') // Se Espera: que exista un button de Busqueda en seccion "Todas las Propiedades"

    });

    it('H_010 Seccion Todas las Propiedades | Contenido', () => {
      home.checkCardsLimit(4) // Se Espera: que el limite de Cards visibles sean 4
    });

    it('H_011 Seccion Todas las Propiedades | Contenido', ()=>{ // Mostrar un listado de inmuebles en promocion
      home.checkCards1('be.visible') // Se Espera: el elemento "Imagen" exista en las Card
      
      //Prueba imagen de fondo segun diseño UI
      //Mostrar Titulo de seccion "Todas las Propiedades"
      //Mostrar un Filtro de Busqueda en Banner
      //Mostrar elementos de Paginacion
      //Mostrar Footer Informativo de la Inmobiliaria
    })

    it('Formulario de Busqueda para Inmuebles', () => { // Mostrar todos los inmuebles que coincidan con el criterio de busqueda realizado por el Usuario
      
      // Prueba Button con filtro desplegable motrando la siguiente lista "Ciudad", "Ambientes", "Cantidad de Baños", "Cantidad de Habitaciones","Mts2 max y min"
      // Prueba Button con el nombre del Mapa mostrando la Ubicacion/Direccion del Inmueble
      // Filtramos por Ciudad mostrando ciudad buscada y quedar seleccionada
      // Filtramos por cantidad de Ambientes y validando que sean numeros enteros
      // Filtramos por cantidad de Habitaciones y validando que sean numeros enteros
      // Filtramos por cantidad de Baños y validando que sean numeros enteros
      // Filtramos por Mts2 Min/Max y validando que se sean 

    });

    it('Check de todos los elementos diseñados en seccion Home', ()=>{ //Checkeamos todos lo elementos del dom existentes segun diseño UI
      // Prueba de todos los elementos del Dom

    }) 
    
    it('Menu Navbar', ()=>{ // Mostrar logo, texto descriptivo, input ubicacion, secciones de la web

      // Prueba de Img logo segun diseño UI
      // Prueba icono menu Nav
      // Prueba Texto descriptivo "Encuentra el Hogar de tus Sueños"
      // Prueba de Filtro realizando busqueda
      // Texto descriptivo "En que ciudad desea Vivir"
      // Link acceso formulario

    })
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
