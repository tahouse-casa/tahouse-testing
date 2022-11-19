import Home from '../../pages/home'

const home = new Home

describe('Testing 1er Sprint | Idea 5 | TA-House', () => {

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
      home.checkProperty2('TA-House')  // Se Espera: que el titulo de la pag sea TA-House

    });

    it('A_001 - Pruebas de Api', () => { // Se probaran status y Endpoints
      // Prueba de los Endpoints de Usuario en la tabla "Nombre de Usuario","Passwrord para Usuario","Nombre","Apellido","Apellido","Email","Ciudad","Pais","Telefono"//
      // Prueba de los Endpoints en Inmuebles en la tabla "Id para inmuebles","Id para Img","Precio","Direccion","Ciudad","Pais","Tamñano Inmueble","Ambientes","Estado (REservado/Alquilado/Vendido),"Codigo de Zona","Fecha Publicacion","Tipo de Inmueble" 
      // Pruebas GET y POST
      home.bucle(3)
    });   

    it('H_001 - Filtro de Busqueda en Banner', ()=>{ // Mostrar inmuebles segun Pais filtrado
      home.search('Uruguay') // Se espera: que el filtro busque por pais ingresado en "Search"
    
    })

    it('H_002 - Inmuebles Destacados | Contenido', () => { // Se prueba titulo y Orden de menor a mayor Precio
      // Prueba de texto descriptivo en titulo del card container 
      home.checkTitulo1('Inmuebles Destacados') // Se Espera: que el titulo sea "Inmuebles Destacados"
      // El carrousel debe contener los 5 mejores inmuebles de mayor a menor 
    });

    it('H_003 - Inmuebles Destacados | Elementos en Cards', ()=>{ // Se Probaran los textos y elementos dentro de las Card 

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

    it('H_004 - Footer Informativo | Contenido', ()=>{ // Mostrar footer en forma de acordeon con sus 4 menuces y logo
      home.checkFooter1('Sobre nosotros',"be.visible")// Se Espera: que el subtitulo "Sobre Nosotros" y el despliegue del texto existan
      home.checkFooter3('Paises','be.visible') // Se Espera: que el subtitulo "Paises" y despliegue del texto existan 
      home.checkFooter4('Categorias','be.visible') // Se Espera: que el subtitulo "Categorias" y despliegue del texto existan
      home.checkFooter2('Nuestra Trayectoria','be.visible') // Se Espera: que el subtitulo "Nuestra Trayecoria" y despliegue del texto existan   
  
    })

    it('H_005 Footer Informativo | Titulo Menu', () =>{
      home.checkFooterTitulo() // Se Espera: que el elemento titulo/logo sea el correcto y exista

    });

    it('H_006 Seccion Guia en el Home', () => { // Mostrar una Guia al usuario para alquilar y/o comprar inmuebles
      cy.contains('Guia de compra').click()// Se Espera: un button de nombre "Guia de Compra"
      home.checkTitulosGuia('exist') // Se Espera: que los elementos titulos y Subtitulos existan en seccion "Guia de Compras"
      home.checkTextSub('be.visible') // Se Espera: que el texto descriptivo debajo de los Subtitlos exista
      
    });

    it('H_007 Seccion Todas las Propiedades | Elementos en Home ', ()=>{ // Mostrar un listado de inmuebles en promocion
      home.chechitems2('be.visible') // Se Espera: que los elementos "Imagen de fondo","logo","texto descriptivo" y "button" existan
      
    })

    it('H_008 Seccion Todas las Propiedades | Filtro de Busqueda', () => {
      home.checkFilter1('filter') // Se Espera: que exista un filtro de Busqueda en seccion "Todas las Propiedades"

    });

    it('H_009 Seccion Todas las Propiedades | Paginacion', () => {
      home.checkPaginacion1('paginacion') // Se Espera: que exista un button de Busqueda en seccion "Todas las Propiedades"

    });

    it('H_010 Seccion Todas las Propiedades | Contenido', () => {
      home.checkCardsLimit(8) // Se Espera: que el limite de Cards visibles sean 8
    });

    it('H_011 Seccion Todas las Propiedades | Contenido', ()=>{ // Mostrar un listado de inmuebles en promocion
      home.checkCards1('be.visible') // Se Espera: el elemento "Imagen" exista en las Card
      
      //Prueba imagen de fondo segun diseño UI
      //Mostrar Titulo de seccion "Todas las Propiedades"
      //Mostrar un Filtro de Busqueda en Banner
      //Mostrar elementos de Paginacion
      //Mostrar Footer Informativo de la Inmobiliaria
    })

    it('B_001 Filtro de Busqueda | Contenido ', () => { // Mostrar todos los inmuebles que coincidan con el criterio de busqueda realizado por el Usuario
      home.search('Argentina') // Accedemos al filtro buscando por pais "Argentina"
      home.inputsMts2(5) // Se Espera: 5 inputs en total dentro del Form de Filtro "Cantidad de Ambientes", "Cantidad de Baños", "Cantidad de Habitaciones", "Precio", "Mts2"

    });

    it('B_002 Filtro de Busqueda | Button Submit y Button Clear', () => {
      home.search('Argentina')
      home.checkBtnFilter1('Button Submit y Button Clear') // Se Espera: Un button para confirmar datos ingresados en Filtro 
     
    });

    it('B_003 Filtro de Busqueda | Ubicacion (Maps)', () => { // Mostrar Buttons Maps para mostrar la ubicacion del inmueble
      home.search('Argentina')
      home.checkBtnMap('Mapa','be.visible') // Se Espera: Que el Button contenga el nombre "Mapa" y al realizar click el mismo se despliegue

    });

    it('B_004 Filtro de Busqueda | Cantidad de Ambientes', () => { // Mostrar el texto "Cantidad de Amibentes" y su inputs para solicitar datos      
      home.search('Argentina')
      home.chechInputAmb('be.visible') // Se Espera: Que el Button contenga el nombre "Cantidad de Ambientes" y su input de busqueda
    });

    it('B_005 Filtro de Busqueda | Cantidad de Habitaciones', () => { // Mostrar el texto "Cantidad de Habitaciones" y su inputs para solicitar datos       
    
    });

    it('B_006 Filtro de Busqueda | Cantidad de Baños', () => { // Mostrar el texto "Cantidad de Baños" y su inputs para solicitar datos     
    
    });

    it('B_007 Filtro de Busqueda | Cantidad de Mts2', () => { // Mostrar el texto "Cantidad de Mts2" y su inputs para solicitar datos      
    
    });

    it('Inputs dentro del Form', () => { // Mostrar Buttons en Filtro Form "Submit" y "Clear"       
      // Prueba Button con filtro desplegable motrando la siguiente lista "Ciudad", "Ambientes", "Cantidad de Baños", "Cantidad de Habitaciones","Mts2 max y min"
        // Prueba Button con el nombre del Mapa mostrando la Ubicacion/Direccion del Inmueble
        // Filtramos por Ciudad mostrando ciudad buscada y quedar seleccionada
        // Filtramos por cantidad de Ambientes y validando que sean numeros enteros
        // Filtramos por cantidad de Habitaciones y validando que sean numeros enteros
        // Filtramos por cantidad de Baños y validando que sean numeros enteros
        // Filtramos por Mts2 Min / Max y validando que se sean 
      });

    it('Check de todos los elementos diseñados en seccion Home', ()=>{ // Checkeamos todos lo elementos del dom existentes segun diseño UI
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
