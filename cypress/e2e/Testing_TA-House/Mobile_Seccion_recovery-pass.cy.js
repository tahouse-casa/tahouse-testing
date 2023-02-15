
const urlRecoverypass = 'https://dev.tahouse.casa/recovery-password'
const pathRecoveryPass = '/recovery-password'

describe('Mobile | Tests en Seccion Recovery-Pass de Usuario',{  
  viewportWidth:380,viewportHeight:670},() => {
    beforeEach(() => {
            cy.visit(urlRecoverypass)
            expect(cy.config('viewportWidth')).to.equal(380)
            expect(cy.config('viewportHeight')).to.equal(670)
          }) 

    it('Recovery_001 | Validaciones Html Request', () => {// Se prueban las props HTML
      cy.title().should('eq','TaHouse.casa')// Validamos el Tiutlo de la Pagina 
        expect(cy.config('viewportWidth')).to.equal(380)// Validamos MaxWhidth 380px
        expect(cy.config('viewportHeight')).to.equal(670)// Validamos MaxwHeight 670px
        cy.path('https:',pathRecoveryPass)// Se espera: Validar el protocolo "https:" y la ruta Path dentro de la app "/recovery-password"
        cy.url().should('equal',urlRecoverypass)// Se espera: Validar la URL 'https://dev.tahouse.casa/register'   
    });

    it('Recovery_002 | Check Elementos ', () => {// Se realiza un check de todos los elementos visibles
        cy.assertionCheck('Recuperar contraseña')// Titulo en Header 
        cy.assertionCheck('Ingresa la dirección de email')// Subtitulo en Header
        cy.assertionCheck('ENVIAR')// Button para confirmar solicitud
        cy.assertionCheck('¿No recibiste el correo aún?')// Parrafo con mensaje informativo
        cy.assertionCheck('Puedes reintentarlo')// Parrafo con mensaje informativo
      });
    
    it('Recovery_003 | Contenido y Attr | Input SendEmail', () => {// Se prueba contenido y atributos en input
      cy.checkInputType('sendEmail','type','text')// Se espera: el input sea de tipo text
      cy.checkInputType('sendEmail','placeholder','Email')// Se espera: el name del placeholder se Email
      cy.inputWidth('sendEmail','328px')// Se espera: que el width del input email sea de 328px
    }); 
    
    it('Recovery_004 | Contenido y Attr | Button Enviar', () => {// se prueba contenido y atributos en button
        cy.get('button').should('have.css','width','328px')// Se espera: que le width del button sea 328px
    });

    it('Recovery_005 | Recuperar Contraseña Exitosamente', () => {// Se prueba realizar el recupero de la contraseña en Email previamente registrado y mostrando un msj en pantalla
        cy.typeInputName('sendEmail','nuevo@mail.com')// Ingresamos un email registrado
        cy.assertionCheck('ENVIAR').click()// Realizamos click en "ENVIAR"
        cy.wait(3000).then(()=>{
        cy.msjAviso('El mail fue enviado con éxito','be.visible')// Se espera: Un mensaje del sistema indicando la respuesta del sistema
        cy.assertionCheck('CONTINUAR').click()// Realizamos click en "CONTINUAR"
      })   
    });

    it('Recovery_006 | Menu de navegacion no visible', () => {// Se prueba los elementos que no deben estar visibles en esta seccion
      cy.get('nav').should('not.be.visible')// Se espera: que el menu de navegacion no este visible en esta seccion
        
    });

    it('Recovery_007 | Icon Back Login', () => {// Se prueba que el icono de volver sea visible para redireccionar al Login
        cy.get('svg').eq(0)// Se espera: que el button para volver al login exista
    });

    it('Recovery_008 | Input Email sin datos', () => {// Se prueba que el sistema avise mediante un mensaje en pantalla al no ingresar email en campo de datos
        cy.get('button').click()// Realizamos click sobre el button "ENVIAR"
        cy.msjAviso('El email ingresado no es válido','be.visible')// Se espera: el sistema avise mediante un mensaje en pantalla el error
    });
});