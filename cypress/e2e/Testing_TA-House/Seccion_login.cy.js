import { expect } from "chai";
import Login from "../../pages/login"

const login = new Login
const apiUser = 'https://api.dev.tahouse.casa/api/v1/users'
const apiLogin = 'https://api.dev.tahouse.casa/api/v1/auth/login'
const urlLogin = 'https://dev.tahouse.casa/login'
const urlRegister = 'https://dev.tahouse.casa/register'
const urlTaHouse = 'https://dev.tahouse.casa/'

describe('Testing 2do Sprint | Form Login', {
  
  viewportWidth:380,viewportHeight:670}, () => {

    beforeEach(() => {
        cy.visit(urlLogin)
        cy.url().should('equal',urlLogin) //Se espera: Validar la URL 'https://dev.tahouse.casa/login'
        expect(cy.config('viewportWidth')).to.equal(380)
        expect(cy.config('viewportHeight')).to.equal(670)
  
      })

      it('Login_001 | Login Exitoso', () => {// Se espera: login exitoso al sistema
        login.UserLogin('admintahouse@mail.com','root123',urlTaHouse)// Se espera: login con usuario previamente registrado y luego validar URL ingresada
          
      });
      
      it('Login_002 | Seguridad en Password', () => {// Se Prueban la cantidad de caracteres combinando letras y numeros 
        login.user1('juan1@mail.com','aBc12')// Se ingresan menos de 6 caracteres en el password
        login.msjError('La contraseña debe tener al menos 6 caracteres','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla

      });

      it('Login_003 | Contenido y Atributos',()=>{// Se validan los contenidos y atributos de los elementos existentes en login segun diseño UI
        login.valdiacionTitulo('Te damos la bienvenida a TaHouse')//Se espera: Validar contenido del Titulo
        login.validacionSubTitulo('Inicia sesión para una mejor experiencia')//Se espera: Validar contenido del Subtiutlo
        login.itemEmail('email','E-mail')//Se espera: que el Atributo sea 'email' y el contenido 'E-mail
        login.itemPassword('password','Contraseña')//Se espera: que el Atributo sea 'email' y el contenido 'E-mail'
        login.buttonSubmit('Ingresar')//Se espera: el nombre del button

      })


      it('Login_005 | Ingreso con campo de datos vacios', () => {// Se prueba ingresar al sistema con los campos de datos E-mail y Password vacios
        cy.get('button').eq(0).click()// Se realiza click sobre el button 'Ingresar' 
        login.msjError('Todos los campos son requeridos','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla

      })

      it('Login_006 | Contenido en E-mail', () => {// Se prueba que el E-mail tenga el formato correcto
        login.user1('juan1@fake','aBc123')// Se ingresa un E-mail invalido
        login.msjError('be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla

      });

      it('Login_007 | Contenidos y Atributos | Link Recueprar Contraseña', () => {
        login.linkRecoveyPass('Recuperar contraseña','/recovery-password','be.visible')//Se espera: se valida el texto descriptivo, atributo 'href', redireccion a '/recovery-password' y su existencia
          
      });

      it('Login_008 | Contenidos y Atributos | Button Ingresar', () => {
          
      });

      it.only('Login_009 | Elementos existentes', () => {// Se validan todos los elementos existentes en login segun diseño UI
        login.itemsLogin('exist')
        //Se espera: La existencia de los siguientes elementos en el Login
        //Titulo
        //SubTitulo
        //Input E-mail
        //Input Password
        //Button Ingresar (debe ser de tipo submit)
        //Link para redireccionar a Registro
        //Button FaceBook
        //Button Google
        //Link para Recuperar Password 
        
      });

      it('Login_010 | Contenidos y Atributos | Link de Registro Usuario',()=>{// Se valida el contenido y funcionalidad del link de Registro
        login.linkRegistro('No tienes cuenta?','/register','be.visible')//Se espera: se valida el texto descriptivo, atributo 'href', redireccion a '/register' y su existencia


      })

      it('Login_011 | Usuario no Registrado', () => {// Se prueba Ingresar con una cuenta no registrada al sistema
        login.user1('juan2@mail.com','aBc123')// Se ingrea un usuario no registrado previamente 
        login.msjError('Los datos ingresados son incorrectos','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla

      });

      it('Login_012 | Opcion recuperar Contraseña', () => {
          
      });
});