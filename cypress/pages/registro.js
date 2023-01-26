
class Registro {

    userRegistro(text1,text2,text3){
        cy.get('[name="email"]').type(text1)
        cy.get('[name="password"]').type(text2)
        cy.get('[name="password2"]').type(text3)
        cy.get('button').eq(0).click()
        cy.wait(6000)
    }
    
    mensajeRegistro(text){
        cy.get('.sc-grxQYx').should('contain',text) 
    }

    btnPropiedades(text,text1,text2){
        cy.get('button').eq(0).should('have.attr', text, text1)
        .and('contain',text2)
    }

    itemsRegistro(){
        
    }

    itemsCheck(text){
        cy.get('a').eq(0).should(text)
        cy.get('[name="email"]').should(text)
        cy.get('[name="password"]').should(text)
        cy.get('[name="password2"]').should(text)
        cy.get('button').eq(0).should(text)
        cy.get('a').eq(1).should(text)
        cy.get('button').eq(1).should(text)
        cy.get('.sc-ZqGJI').should(text)
        cy.get('button').eq(2).should(text)
        cy.get('.sc-knEsKG').should(text)

    }
    
    linkImg(text,text2){
        cy.get('img').eq(0).should('have.attr','src',text)
        cy.get('img').eq(1).should('have.attr','src',text2)
    }
    
    linkLogin(text){
        cy.get('a').eq(0).click()
        cy.url().should('equal',text)
         
    }
}
export default Registro