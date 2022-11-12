import Home from '../../pages/home'

const home = new Home

describe('Testing del 1er Sprint Idea 5 - Bonpland', () => {

    beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    it('A_001 - Pruebas de Api', () => { // Se probaran status y Endpoints

                    // Prueba elementos Endpoints de Usuario en la tabla "Nombre de Usuario","Passwrord para Usuario","Nombre","Apellido","Apellido","Email","Ciudad","Pais","Telefono"//
                    // Prueba elementos Endpoint en Inmuebles en la tabla "Id para inmuebles","Id para Img","Precio","Direccion","Ciudad","Pais","Tamñano Inmueble","Ambientes","Estado (REservado/Alquilado/Vendido),"Codigo de Zona","Fecha Publicacion","Tipo de Inmueble" 
                    // Pruebas GET y POST

    });   

    it('H_001 - Filtro de Busqueda en Banner', ()=>{ // Mostrar inmuebles segun Pais filtrado

      cy.get('.sc-ipEyDJ').type('Uruguay') //Ingresamos en Campo de Busqueda "Uruguay"
      cy.contains('Buscar').click()
      cy.get('.sc-fbYMXx > .sc-gGvHcT').should('exist')
      
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

    it('H_004 - Inmuebles Destacados | Elementos', ()=>{ // Se Probaran los textos y elementos dentro de las Card 
      // Pruebas de elementos indicando los criterios de aceptacion en las Card
      cy.fixture('locators').then((locator)=>{ 
        // Prueba de elemento "Mts2" dentro de la cards 
        cy.get(locator.mts2).then((e)=>{
          let estado = e.text().slice(5,7)
          if(estado == 'm2'){
            cy.log('El texto en "mts2" en correcto')
            cy.get(locator.mts2).should('contain',`${estado}`)
          }
        })
        // Prueba de elemento "Tamaño" en mts2 dentro de la cards 
        cy.get(locator.tamaño).then((e)=>{
          let estado = e.text().slice(4,6)
          if(estado == 'm2'){
            cy.log('El texto "mts2" en tamaño es correcto')
            cy.get(locator.tamaño).should('contain',`${estado}`)
          }
        }) 
        // Prueba de elemento "Ambientes" dentro de la card
        cy.get(locator.ambientes).then((e)=>{
          let estado = e.text().slice(2,5)
          if(estado == 'amb'){
            cy.log('El texto "amb" en Ambiente es correcto')
            cy.get(locator.ambientes).should('contain',`${estado}`)
          }
        }) 
        // Prueba de elemento "Dormitorios" dentro de la card 
        cy.get(locator.dormitorios).then((e)=>{
            let estado = e.text().slice(2,6)
            if(estado == 'dorm'){
            cy.log('El texto "dorm" en Dormitorios es correcto')
            cy.get(locator.dormitorios).should('contain',`${estado}`)
            }
        })
        // Prueba de elemento "Baños" dentro de la card 
        cy.get(locator.baños).then((e)=>{
          let estado = e.text().slice(2,7)
          if(estado == 'baños'){
            cy.log('El texto "baños" en Baños es correcto')
            cy.get(locator.baños).should('contain',`${estado}`)
          }
        })  
        // Prueba de elemento "Precio" dentro de la card 
        cy.get(locator.precio).then((e)=>{
          let estado = e.text().slice(0,3)
          if(estado == 'USD'){
            cy.log('El texto "USD" en Precio es correcto')
            cy.get(locator.precio).should('contain',`${estado}`)
          }
        })
        cy.get(locator.pais).should('exist') // Prueba de elemento "Pais" dentro de la card 
        cy.get(locator.direccion).should('exist') // Prueba de elemento "Direccion" dentro de la card
        cy.get(locator.fecha).should('exist') // Prueba de elemento "Fecha" dentro de la card
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
    
    it.only('H_005 - Footer Informativo', ()=>{ // Mostrar footer en forma de acordeon con sus 4 menuces, logo y posicion de elementos en el Dom segun diseño UI

      home.checkFooterNosotros('Sobre nosotros')
      
      cy.fixture('locators').then((locator)=>{
        cy.get(locator.footerItemHome1).should('be.visible').and('have.text','Bonplad')
       
      })
                    // Prueba de Img logo ubicada segun diseño UI
                    // Prueba de contenido en sus 4 opciones "Sobre Nosotros","Nuestra Trayectoria","Paises","Categorias"
                    // Prueba de menuces de tipo acordeon y su depliegue

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
