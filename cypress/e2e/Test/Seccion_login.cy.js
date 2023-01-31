import { expect } from "chai";
import Login from "../../pages/login"
import Admin from "../../pages/loginAdmin";

const admin = new Admin
const login = new Login


const urlLogin = 'https://dev.tahouse.casa/login'
const urlRegister = 'https://dev.tahouse.casa/register'
const urlRecoverypass = 'https://dev.tahouse.casa/recovery-password'

describe('Testing 3er Sprint | Pruebas en Seccion Login Usuario', {  
  viewportWidth:380,viewportHeight:670},() => {

    beforeEach(() => {
        cy.session('login',()=>{
          cy.visit(urlLogin)
          expect(cy.config('viewportWidth')).to.equal(380)
          expect(cy.config('viewportHeight')).to.equal(670)
        }) 
      })

      it('Login_001 | Check Elementos | Login',()=>{// Se validan los contenidos y atributos de los elementos existentes en login segun diseño UI
        cy.visit(urlLogin)//Se espera: La existencia de los siguientes elementos en el Login
        cy.wait(1000).then(()=>{
          cy.assertionCheck('Te damos la bienvenida a TaHouse')//Titulo
          cy.assertionCheck('Inicia sesión para una mejor experiencia')//Se espera: Validar contenido del Subtiutlo
          cy.inputEmail('E-mail','E-mail')// Se espera: que el placeholder sea 'email' y el contenido 'E-mail
          cy.inputPass('Contraseña','password')// Se espera: que el placeholder sea 'password' y el contenido 'Contraseña'
          cy.assertionCheck('Ingresar')//Button Ingresar (debe ser de tipo submit)
          cy.assertionCheck('Registrate') //Link para redireccionar a Registro
          cy.assertionCheck('Facebook')//Button FaceBook
          cy.assertionCheck('Google')//Button Google
          cy.assertionCheck('Recuperar contraseña')//Link para Recuperar Password 
        }) 
      })

      it('Login_002 | Login Exitoso', () => {// Se espera: login exitoso al sistema
        cy.visit(urlLogin)
        cy.inputEmail('E-mail','nuevo20@mail.com')
        cy.inputPass('Contraseña','aBc123')
        cy.assertionCheck('Ingresar').click()  // Se espera: login con usuario previamente registrado y luego validar URL ingresada
      });
      
      it('Login_003 | Validacion en Password', () => {// Se Prueban la cantidad de caracteres combinando letras y numeros 
        cy.visit(urlLogin)
        cy.inputEmail('E-mail','nuevo20@mail.com')
        cy.inputPass('Contraseña','aBc12') // Se ingresan menos de 6 caracteres en el password
        cy.assertionCheck('Ingresar').click()  
        cy.wait(3000).then(()=>{
          cy.msjAviso('La contraseña debe tener al menos 6 caracteres','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla
        })

      });
 
      it('Login_004 | Ingreso con campo de datos vacios', () => {// Se prueba ingresar al sistema con los campos de datos E-mail y Password vacios
        cy.visit(urlLogin)
        cy.assertionCheck('Ingresar').click()// Se realiza click sobre el button 'Ingresar' 
        cy.wait(3000).then(()=>{
          cy.msjAviso('Todos los campos son requeridos','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla
        })                                                           // Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla
      })

      it('Login_005 | Validacion E-mail', () => {// Se prueba elensaje en pantalla al ingresar un mail invalido
        cy.visit(urlLogin)
        cy.inputEmail('E-mail','nuevo@fake')// Se ingresa un E-mail invalido
        cy.inputPass('Contraseña','aBc123')// Se ingresa: password valida
        cy.assertionCheck('Ingresar').click()//Click en Ingresar
        // cy.wait(3000).then(()=>{
        //   cy.msjAviso('E-mail formato invalido','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla
        //     }) 
      });

      it('Login_006 | Link Registro Usuario',()=>{// Ingresamos al link y validamos redireccion
        cy.visit(urlLogin)
        cy.assertionCheck('¿No tienes cuenta? Registrate').click()
        cy.wait(1000).then(()=>{
          cy.url().should('equal',urlRegister)//Validamos el correcto ingreso a la url
          cy.path('https:','/register')// Se espera: Validar la ruta Path dentro de la app "/recovery-password"
        })
        cy.get('a').eq(0).click({force:true})//Click para volver a seccion /login
      })

      it('Login_007 | Link Recuperar Contraseña', () => {// Ingresamos al link y validamos redireccion
        cy.visit(urlLogin)
        cy.assertionCheck('Recuperar contraseña').click()
          cy.wait(2000).then(()=>{
            cy.url().should('equal',urlRecoverypass)//Validamos el correcto ingreso a la url
            cy.title().should('include', 'TaHouse.casa')
            // Se espera: Validar el protocolo "https:"
            cy.path('https:','/recovery-password')// Se espera: Validar la ruta Path dentro de la app "/recovery-password"
          })
          cy.get('a').click()//Click para volver al Registro
      });

      it('Login_008 | Login Usuario no Registrado', () => {// Se prueba Ingresar al sistema con una cuenta no registrada 
        cy.visit(urlLogin)
        cy.inputEmail('E-mail','nuevo100@mail.com')// Se intenta realizar login con usuario no registrado
        cy.inputPass('Contraseña','aBc123')//Se ingresa password random
        cy.assertionCheck('Ingresar').click()
        cy.wait(5000).then(()=>{
          cy.msjAviso('Los datos ingresados son incorrectos','be.visible')// Se espera: el sistema avise mediante un msj el error y lo muestre en pantalla
        })      
      });
});