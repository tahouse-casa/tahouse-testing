import Card from '../../pages/card'
import Home from '../../pages/home'

const home = new Home
const card = new Card

describe('Testing 1er Sprint | Idea 5 | TA-House', () => {

    beforeEach(() => {
      cy.visit('https://dev.tahouse.casa/')

    })

    it('W_001 - Html | XHR request', () => { // Validamos las propiedades del HTML
      cy.request('https://dev.tahouse.casa/')
        .should((response)=>{
          expect(response.status).to.eq(200) // Se Espera: que el estado de la conexion sea 200
          expect(response).to.have.property('headers') // Se Espera: que exista el header 
          expect(response.headers).to.have.property('content-type') // Se Espera: que exista el content-type 
          expect(response).to.have.property('duration')
        })

        home.checkProperty('https://dev.tahouse.casa/')  // Se Espera: que la url y charset "UTF-8" sean correctos 
    });

    it('W_002 - Html | Titulo', () => { // Validacion web y prop HTML
      home.checkProperty2('TaHouse.casa')  // Se Espera: que el titulo de la pag sea TaHouse.casa

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
      home.checkFooter1('Sobre Nosotros',"be.visible")// Se Espera: que el subtitulo "Sobre Nosotros" y el despliegue del texto existan
      home.checkFooter3('Categorias','be.visible') // Se Espera: que el subtitulo "Paises" y despliegue del texto existan 
      home.checkFooter4('Paises','be.visible') // Se Espera: que el subtitulo "Categorias" y despliegue del texto existan
      home.checkFooter2('Nuestra Trayectoria','be.visible') // Se Espera: que el subtitulo "Nuestra Trayecoria" y despliegue del texto existan   
  
    })

    it('H_005 Footer Informativo | Titulo Menu', () =>{
      home.checkFooterTitulo('Ta House') // Se Espera: que el elemento titulo/logo sea el correcto y exista

    });

    it('H_006 Seccion Guia en el Home', () => { // Mostrar una Guia al usuario para alquilar y/o comprar inmuebles
      cy.contains('Guia de compra').click()// Se Espera: un button de nombre "Guia de Compra"
      home.checkTitulosGuia('exist') // Se Espera: que los elementos titulos y Subtitulos existan en seccion "Guia de Compras"
      home.checkTextSub('be.visible') // Se Espera: que el texto descriptivo debajo de los Subtitlos exista
      
    });

    it('H_007 Seccion Todas las Propiedades | Elementos en Home ', ()=>{ // Mostrar un Button "Ver Mas Propiedades" debajo de cards contenedores Inmuebles Destacados
      home.checkitems2('be.visible','!Los mejores precios y descuentos los encontras en Ta House!') // Se Espera: que los elementos "Imagen de fondo","logo","texto descriptivo" y "button Ver Mas Propiedades" existan

    })

    it('H_008 Seccion Todas las Propiedades | Filtro de Busqueda', () => {
      home.checkFilter1('Argentina') // Se Espera: un filtro de busqueda que pueda filtrar por pais

    });

    it('H_009 Seccion Todas las Propiedades | Paginacion', () => {
      home.checkPaginacion1('be.visible') // Se Espera: que exista un button de Busqueda en seccion "Todas las Propiedades"

    });

    it('H_010 Seccion Todas las Propiedades | Contenido', () => {
      home.checkCardsLimit(8) // Se Espera: que el limite de Cards visibles sean 8
    });

    it('H_011 Seccion Todas las Propiedades | Contenido', ()=>{ // Mostrar un listado de inmuebles en promocion
      home.checkCards1('be.visible','150px','166.5px','https://') // Se Espera: el elemento "Imagen" exista en las Card, se comprueba su tamñana "heigth: 150px" y "width:166.5px", su "attr(src) contenga link"

    })

    it('C_001 Card Detail | Imagenes', () => { // Mostrar un Carrousel con 3 imagenes x Inmueble      
      card.checkCarrouselCards('be.visible','204px','343px') // Se Espera: que sean visbles las 3 imagenes y su tamaño sea: "heigth: 200px", "whidth: 340px"
     
    });

    it('C_002 Card Detail | Precio', () => { // Mostrar el Precio en USD del Inmueble   
      card.clickCard(0) // Accedemos a la 1er card en Inmuebles Destacados
      card.checkCardPrice('USD') // Se Espera: que exista el texto "USD" en precio
    });

    it('C_003 Card Detail | Lugar de locacion del Inmueble', () => { // Mostrar ubicaion la ubicacion (Ciudad / Pais) 
      card.clickCard(0)      
      card.checkCardUbi('be.visible')

    });

    it('C_004 Card Detail | Carateristica del Inmueble', () => { // Mostrar el tamaño en "mts2" y canitdad de "Ambientes", "Dormitorios" y "Baños"
      card.clickCard(0)
      card.checkCardDetail(0,'m2')
      card.checkCardDetail(1,'m2')
      card.checkCardDetail(2,'Ambientes')
      card.checkCardDetail(3,'dorm')
      card.checkCardDetail(4,'baños')
      
    });

    it('C_005 Card Detail | Tipo y Estado del Inmueble', () => { // Mostrar su tipo "Casa","Piso","Terreno" y su estado "Alquilado", "Vendido", "Reservado"
      card.clickCard(0)
      card.checkCardState('be.visible') // Se Espera: que sea visible tipo del inmueble y Estado

    });

    it('C_006 Card Detail | Tipo de Zona (indicar ubicacion destacada)', () => { // Mostrar si tiene una ubicacion destacada     
      card.clickCard(0)
      card.checkCardZone('Zona Destacada') // Se Espera que texto sea "Zona Destacada"

    }); 
    
    it('C_007 Card Detail | Texto descriptivo de cada Inmueble', () => { //       
      card.clickCard(0)
      card.checkCardText('be.visible')

    });    

    it('C_008 Card Detail | Card Detail | Información y Contacto de cada inmueble', () => { //       
      card.clickCard(0)
      card.checkCardContact('mensaje')

    });  
    
    it('C_009 Card Detail | Button para adquirir inmueble', () => { //      
      card.clickCard(0)
      card.checkCardBtnAdd('be.visible')
    });
    
    
//     it('Inputs dentro del Form', () => { // Mostrar Buttons en Filtro Form "Submit" y "Clear"       
//       // Prueba Button con filtro desplegable motrando la siguiente lista "Ciudad", "Ambientes", "Cantidad de Baños", "Cantidad de Habitaciones","Mts2 max y min"
//         // Prueba Button con el nombre del Mapa mostrando la Ubicacion/Direccion del Inmueble
//         // Filtramos por Ciudad mostrando ciudad buscada y quedar seleccionada
//         // Filtramos por cantidad de Ambientes y validando que sean numeros enteros
//         // Filtramos por cantidad de Habitaciones y validando que sean numeros enteros
//         // Filtramos por cantidad de Baños y validando que sean numeros enteros
//         // Filtramos por Mts2 Min / Max y validando que se sean 
//       });

//     it('Check de todos los elementos diseñados en seccion Home', ()=>{ // Checkeamos todos lo elementos del dom existentes segun diseño UI
//       // Prueba de todos los elementos del Dom

//     }) 
    
//     it('Menu Navbar', ()=>{ // Mostrar logo, texto descriptivo, input ubicacion, secciones de la web

//       // Prueba de Img logo segun diseño UI
//       // Prueba icono menu Nav
//       // Prueba Texto descriptivo "Encuentra el Hogar de tus Sueños"
//       // Prueba de Filtro realizando busqueda
//       // Texto descriptivo "En que ciudad desea Vivir"
//       // Link acceso formulario

//     })

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
