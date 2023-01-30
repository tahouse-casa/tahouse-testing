
class Login {

    valdiacionTitulo(text){
        cy.contains(text).should('contain',text).and('exist')
    }

    validacionSubTitulo(text){
        cy.contains(text).should('contain',text).and('exist')
    }

    
    itemEmail(text,text2){
        cy.get('[name="email"]').should('have.attr', 'type', text)
        .and('have.attr', 'placeholder', 'E-mail')
    }
    
    itemPassword(text,text2){
        cy.get('[name="password"]').should('have.attr', 'type', text)
        .and('have.attr', 'placeholder', text2)
    }

    buttonSubmit(text){
        cy.contains(text).should('contain',text)
    }

    linkRegistro(text,text1,text2){
        const urlRegister = 'https://dev.tahouse.casa/register'
        cy.get('.sc-dkKxlM').find('a').should('contain',text)
          .and('have.attr','href',text1)
          .and(text2).click()
        cy.url().should('equal',urlRegister)
        cy.go('back')      
    }

    linkRecoveyPass(text,text2,text3){
        const urlRecoveyPass = 'https://dev.tahouse.casa/recovery-password'
        cy.contains(text).should('contain',text)
          .and(text3).click()
        cy.url().should('equal',urlRecoveyPass)
        cy.go('back')
    }

}

export default Login