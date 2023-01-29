
class Login {

    UserLogin(text1,text2,text3){
        cy.get('[name="email"]').type(text1)
        cy.get('[name="password"]').type(text2)
        cy.get('button').eq(0).click()
        cy.wait(5000)
        cy.url().should('equal',text3)
        cy.go('back')
    }

    user1(text1,text2){
        cy.get('[name="email"]').type(text1)
        cy.get('[name="password"]').type(text2)
        cy.get('button').eq(0).click()
        
    }

    msjError(text,text2){
        cy.contains(text).should(text2)
        .and('contain',text)
    }

    valdiacionTitulo(text){
        cy.contains(text).should('contain',text).and('exist')
    }

    validacionSubTitulo(text){
        cy.contains(text).should('contain',text).and('exist')
    }

    itemsLogin(text){
        cy.get('.sc-fxTzYC').should(text)
        cy.get('.sc-fxTzYC').should(text)
        cy.get('[name="email"]').should(text)
        cy.get('[name="password"]').should(text)
        cy.get('.sc-dTjBdT > :nth-child(3)').should(text)
        cy.get('.sc-dkKxlM > :nth-child(4)').should(text)
        cy.get('.sc-gGWvLE > :nth-child(1)').should(text)
        cy.get('.sc-gGWvLE > :nth-child(2)').should(text)
        cy.get('.sc-dkcEsn > .sc-bTUVah').should(text)
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