
class Login {

    UserLogin(){
        
        cy.get('[name="email"]').type('admintahouse@mail.com')
        cy.get('[name="password"]').type('root123')
        cy.get('.sc-dTjBdT > .sc-jKvnYE').click()
    }

}

export default Login