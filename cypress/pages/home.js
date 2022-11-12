
class Home {

    checkFooterNosotros(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome2).should('be.visible').and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome2).click()
                cy.get(locator.textFooterNosotros).should('be.visible')
            })
        })
    }
}
export default Home