
import Registro from "../../pages/registro"

const registro = new Registro 

const api = 'https://api.dev.tahouse.casa/api/v1/users'
const urlTaHouseRegister = 'https://dev.tahouse.casa/register'
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const registerPath = '/register'
const urlTaHouse = 'https://dev.tahouse.casa'

describe('Testing 2do Sprint | Form Registro',{  
  viewportWidth:380,viewportHeight:670},()=>{
    beforeEach(() => {
        cy.visit(registerPath)
        expect(cy.config('viewportWidth')).to.equal(380)
        expect(cy.config('viewportHeight')).to.equal(670)
    })

      it.only('Registro_001 | Validaciones Html Request', () => {
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo del Html
          expect(cy.config('viewportWidth')).to.equal(380) // Validamos MaxWhidth 380px
          expect(cy.config('viewportHeight')).to.equal(670) // Validamos MaxwHeight 670px
        cy.location().should((location)=>{
          expect(location.protocol).to.eq('https:')// Se espera: Validar el protocolo "https:"
          expect(location.pathname).to.eq('/register')// Se espera: Validar la ruta Path dentro de la app "/register"
          expect(location.href).to.eq(urlTaHouseRegister)//Se espera: Validar la URL 'https://dev.tahouse.casa/register' 
        })   

      });

      it.only('Registro_002 | Elementos Existentes', () => {// Se prueba la visibilidad de todos los elementos en la seccion Registro
        cy.get('a').eq(0).should('be.visible')// Button tipo flecha redireccionando al Login
        cy.assertionCheck('Te damos la bienvenida a TaHouse')//Titulo principal en Header
        cy.assertionCheck('Registrate para una mejor experiencia')
        cy.searchInputName('email','be.visible')// Campo de dato E-mail
        cy.searchInputName('password','be.visible')// Campo de dato contraseña
        cy.get('button').eq(0).should('be.visible')// Button mostrar contraseña
        cy.searchInputName('password2','be.visible')// Campo de dato Repetir contraseña
        cy.get('button').eq(1).should('be.visible')// Button mostrar Repetir contraseña
        cy.assertionCheck('Ingresar')// Button para confirmar registro
        cy.assertionCheck('O ingresa con una red social')// Subtitulo indicando para ingresar mediante red social
        cy.assertionCheck('Facebook')//Button FaceBook
        cy.assertionCheck('Google')//Button Google
      
    });

      it.only('Registro_001 | Registro Exitoso', () => {// El usuario pueda Regitrarse en el sistema
        cy.typeInputName('email','nuevo@mail.com')// Ingresamos mail random
        cy.typeInputName('password','aBc123')// Ingresamos password random
        cy.typeInputName('password2','aBc123')// Repetimos password random ingresada
        cy.assertionCheck('Ingresar').click()// CLick en Ingresar
        cy.msjAviso('Gracias por registrarte','be.visible')// Se espera: el sistema avise mediante un mensaje en pantalla la confirmacion del registro
      });

      it.only('Resgistro_002 | Registro con campo de datos vacios',()=>{// Se prueba realizar un registro en el sistema con todos los campos de datos vacios
        cy.get('button').eq(2).click()// Click en Ingresar
        cy.wait(2000).then(()=>{
          cy.msjAviso('Todos los campos son requeridos','be.visible')// Se espera: un mensaje de avios en pantalla mostrando el error al dejar los campos de datos vacios
        })
      })

      it.only('Registro_003 | Validacion Contraseña', () => {// Se prueba la validacion en contraseña y repetir contraseña
        cy.typeInputName('email','nuevo@mail.com') // Se espera: al ingresar menos de 6 caracteres en los campos contraseña y repetir contraseña se muestre un mensaje en pantalla notificando el mismo
        cy.typeInputName('password','Abc12')// Ingresamos < de 6 caracteres random
        cy.typeInputName('password2','Abc12')// Repetimos caracteres random ingresados
        cy.assertionCheck('Ingresar').click()
        cy.wait(2000).then(()=>{
          cy.msjAviso('La contraseña debe tener al menos 6 caracteres','be.visible')//Se espera: un msj en pantalla notificando el minimo de caracteres
        })
      });

      it.only('Registro_005 | Mostrar Contraseña', () => {// Se prueba la opcion de mostrar los caracteres en los campos de contraseña y repetir contraseña solo si el usuario lo solicita
        cy.typeInputName('email','nuevo@mail.com')// Ingresamos Email random 
        cy.typeInputName('password','aBc12')// Ingresamos password random
        cy.typeInputName('password2','aBc12')// Repetimos password random ingresda
        cy.get('button').eq(0).click()// click en button mostrar "Contraseña"
        cy.get('button').eq(1).click()// click en button mostrar "Repetir contraseña"
          .then(()=>{
            cy.searchPlaceholder('password','aBc12')// Confirmamos el Value contraseña
            cy.searchPlaceholder('password2','aBc12')// Confirmamos el Value repetir contraseña
          })
      });

      it.only('Resgitro_006 | Confirmar Contraseña', () => {// Se prueba la igualdad de carcarteres ingresados por los usuarios en los campos de Contraseña y Repetir Contraseña
        cy.typeInputName('email','nuevo@mail.com')// Ingresamos Email random 
        cy.typeInputName('password','abc12')// Ingresamos password random
        cy.typeInputName('password2','Abc')// Repetimos password random ingresda
          // Se espera: Al ingresar caracateres distintos en Contraseña y Repetir contraseña se muestre un mensaje en pantalla notificando el error
          
      });

      it('Registro_007 | Multiples Registros', () => {// Se prueba ingresar un usuario previemnte registrado
        registro.userRegistro('nuevo@mail.com','aBc123','aBc123')// se espera: al ingresar un usuario ya registrado el sistema no continue el proceso y muestre un mensaje en pantalla notificando el error
        registro.mensajeRegistro('Esta cuenta ya está registrada')

      });

      it('Registro_008 | Contenido y Atributos | Button ingresar', () => {// Se prueba el nombre del button submit en form de registro
        registro.btnPropiedades('type','submit','Registrar')// Se espera: El nombre sea Registrar y que su type "Submit"
        
      });
      
      it('Registro_009 | Links de Img en Button FB y Google', () => {// se prueban los links de las imagenes de los buttons
        registro.linkImg('/static/media/Facebook.9f77d10e26cc26dd4371274fdd426a08.svg','/static/media/Google.735a08524e3537e3cd2430c1aee63076.svg')// Se espera: correcto enlace a los src en las img de los buttons

      });

      it('Regitro_010 | Link de redireccion a Login', () => {// Se prueba la redireccion del link
        registro.linkLogin(urlTaHouseLogin)// Se espera: Al realizar click en el button de volver al login, este redireccione correctamente al mismo
          
      });

});