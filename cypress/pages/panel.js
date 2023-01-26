
 const urlLogin = 'https://dev.tahouse.casa/login'

class Admin {

    loginAdmin(){
        cy.visit(urlLogin)
        cy.fixture('credenciales').then((testdata)=>{
            this.testdata = testdata
        cy.login(this.testdata.username,this.testdata.password)    
        cy.wait(5000)
        })
    }

}

export default Admin