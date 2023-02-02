
class Admin {
    loginAdmin(urlLogin){
        cy.visit(urlLogin)
        cy.fixture('credenciales').then((testdata)=>{
            this.testdata = testdata
        cy.loginAdmin(this.testdata.username,this.testdata.password)    
        })
    }
}
export default Admin