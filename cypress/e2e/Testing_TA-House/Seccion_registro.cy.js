

import Registro from "../../pages/registro"

const registro = new Registro 

const api = 'https://api.dev.tahouse.casa/api/v1/users'
const urlTaHouseRegister = 'https://dev.tahouse.casa/register'
const urlTaHouseLogin = 'https://dev.tahouse.casa/login'

describe('Testing 2do Sprint | Form Registro', {
  
  viewportWidth:380,viewportHeight:670}, () => {

    beforeEach(() => {
      cy.visit(urlTaHouseRegister)

      })

      it('Registro_000 | Validaciones Html Request', () => {
        cy.url().should('equal',urlTaHouseRegister) //Se espera: Validar la URL 'https://dev.tahouse.casa/register'
        cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo del Html
          expect(cy.config('viewportWidth')).to.equal(380) // Validamos MaxWhidth 380px
          expect(cy.config('viewportHeight')).to.equal(670) // Validamos MaxwHeight 670px
        cy.location().should((location)=>{
          expect(location.protocol).to.eq('https:')// Se espera: Validar el protocolo "https:"
          expect(location.pathname).to.eq('/register')// Se espera: Validar la ruta Path dentro de la app "/register"
        })   

      });

      it('Registro_001 | Registro Exitoso', () => {// El usuario pueda Regitrarse en el sistema
        registro.userRegistro('nuevo@mail.com','aBc123','aBc123')// ingresamos un nombre de usuario, password y confirmar password
        registro.mensajeRegistro('Su cuenta se registro exitosamente')// Se espera: el sistema avise mediante un mensaje en pantalla la confirmacion del registro
      
      });

      it('Resgistro_002 | Registro con campo de datos vacios',()=>{// Se prueba realizar un registro en el sistema con todos los campos de datos vacios
        cy.get('button').eq(0).click()
        registro.mensajeRegistro('Todos los campos son requeridos')// Se espera: un mensaje de avios en pantalla mostrando el error al dejar los campos de datos vacios

      })

      it('Registro_003 | Validacion Contraseña', () => {// Se prueba la validacion en contraseña y repetir contraseña
        registro.userRegistro('nuevo@mail.com','aBc12','aBc12')// Se espera: al ingresar menos de 6 caracteres en los campos contraseña y repetir contraseña se muestre un mensaje en pantalla notificando el error
        registro.mensajeRegistro('La contraseña debe tener al menos 6 caracteres')

      });

      it('Registro_005 | Mostrar Contraseña', () => {// Se prueba la opcion de mostrar los caracteres en los campos de contraseña y repetir contraseña solo si el usuario lo solicita
          
      });

      it('Resgitro_006 | Confirmar Contraseña', () => {// Se prueba la igualdad de carcarteres ingresados por los usuarios en los campos de Contraseña y Repetir Contraseña
          registro.userRegistro('nuevo@mail.com','aBc123','aBc124')// Se espera: Al ingresar caracateres distintos en Contraseña y Repetir contraseña se muestre un mensaje en pantalla notificando el error
          registro.mensajeRegistro('Verifica que las contraseñas sean iguales')
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

      it('Registro_011 | Elementos Existentes', () => {// Se prueba la visibilidad de todos los elementos en la seccion Registro
        registro.itemsCheck('be.visible')
        // Se espera: La Visibilidad de los siguentes elementos
        // Button tipo flecha redireccionando al Login
        // Campo de dato E-mail
        // Campo de dato Contraseña
        // Campo de dato Repetir Contraseña
        // Button para confirmar registro
        // Subtitulo indicando para ingresar mediante red social
        // Button FB
        // Button Google

    });

});