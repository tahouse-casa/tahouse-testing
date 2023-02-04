
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

    it('Recovery_002 | Check Elementos | Recovery-Pass', () => {// Se realiza un check de todos los elementos visibles
        cy.assertionCheck('Recuperar contraseña')// Titulo en Header 
        cy.assertionCheck('Ingresa la dirección de email')// Subtitulo en Header
        cy.assertionCheck('ENVIAR')// Button para confirmar solicitud
        cy.assertionCheck('¿No recibiste el correo aún?')// Parrafo con mensaje informativo
        cy.assertionCheck('Puedes reintentarlo')// Parrafo con mensaje informativo
      });
    
    it('Recovery_003 | Contenido y Attr | Input SendEmail', () => {// Se prueba contenido y atributos en inputs
      cy.checkInputType('sendEmail','type','text')// Se espera: el input sea de tipo text
      cy.checkInputType('sendEmail','placeholder','Email')// Se espera: el name del placeholder se Email
    });  

    it('Recovery_004 | Recuperar Contraseña Exitosamente', () => {// Se prueba realizar el recupero de la contraseña en Email previamente registrado
        cy.typeInputName('sendEmail','nuevo@mail.com')// Ingresamos un email registrado
        cy.assertionCheck('ENVIAR').click()
        cy.wait(3000).then(()=>{
        cy.msjAviso('El mail fue enviado con éxito','be.visible')// Se espera: Un mensaje del sistema indicando la respuesta del sistema
        cy.assertionCheck('CONTINUAR').click()
      })   
    });
});