class Login {
    loginAdmin(urlLogin){
        cy.visit(urlLogin)
        cy.fixture('credenciales').then((testdata)=>{
            this.testdata = testdata
        cy.login(this.testdata.username,this.testdata.password)
        cy.wait(4000)
        })
    }

    loginUser1(urlLogin){
        cy.visit(urlLogin)
        cy.fixture('credenciales').then((dataUser)=>{
            this.dataUser = dataUser
        cy.login(this.dataUser.user1,this.dataUser.password1) 
        })
    }
}
export default Login