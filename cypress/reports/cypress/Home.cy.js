

describe('Testing en Home Seccion', () => {
    
    beforeEach(() => {
    cy.setCookie('TaHouse', 'Cookie1')
      cy.setCookie('Admin', 'Cookie2')
      cy.getCookie('TaHouse').should('have.property', 'value', 'Cookie1')
      cy.getCookie('Admin').should('have.property', 'value', 'Cookie2')
      cy.getCookies().should('have.length', 2)
        
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

