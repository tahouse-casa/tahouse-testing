
class Login {

    UserLogin(text1,text2){
        
        cy.get('[name="email"]').type(text1)
        cy.get('[name="password"]').type(text2)
        cy.get('.sc-dTjBdT > .sc-jKvnYE').click()
    }

}

export default Login