
class Home {

    checkFooter1(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome1).should('be.visible').and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome1).click()
                cy.get(locator.textFooter1).should('be.visible')
                
            })
        })
    }
    checkFooter2(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome2).should('be.visible').and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome2).click()
                cy.get(locator.textFooter2).should('be.visible')
            })
        })
    }
    checkFooter3(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome3).should('be.visible').and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome3).click()
                cy.get(locator.textFooter3).should('be.visible')
            })
        })
    }

    checkFooter4(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome4).should('be.visible').and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome4).click()
                cy.get(locator.textFooter4).should('be.visible')
            })
        })
    }
    search(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.inputSearch).type(text)
            cy.get(locator.InputTitulo).should('be.visible')
            cy.get(locator.btnSearch).click()
        })
    }

    checkProperty(text,url){
        cy.title().should('eq',text)
        cy.url().should('eq',url)
        cy.document().should('have.property','charset').and('eq','UTF-8')
    }

    bucle(num){
        for (let i = 0; i < num ; i++) {
            cy.log("N° "+ i)
             
       }  
    }
    checkDataCardPais(prop){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.pais).each(($el)=>{
                let data = $el.text()
                if(data){
                    cy.get(locator.pais).should(prop)
                }
            })
        })
    }
    checkDataCardDir(prop){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.direccion).each(($el)=>{
                let data = $el.text()
                if(data){
                    cy.get(locator.direccion).should(prop)
                }
            })
        })
    }

    CheckDataCard2(text){
        cy.fixture('locators').then((locator)=>{
           cy.get(locator.precio).each(($el)=>{
            let data =$el.text()
            if(data.includes(text)){
                cy.get(locator.precio).should('contain',text)
            }
           }) 
        })
    } 

    checkDataCardFecha(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.fecha).each(($el)=>{
             let data =$el.text()
             if(data){
                 cy.get(locator.fecha).should(text)
                 cy.log(data)
             }
            }) 
         })
    }

    CheckDataCard(m2,amb,dorm,baños){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.detail1).each(($el)=>{
                let data = $el.text()
                if(data.includes(amb)){
                    cy.get(locator.detail1).should('contain',amb) 
                  }
                  if(data.includes(dorm)){
                    cy.get(locator.detail1).should('contain',dorm) 
                  }  
                  if(data.includes(baños)){
                    cy.get(locator.detail1).should('contain',baños)
                  }
                  if(data.includes(m2)){
                    cy.get(locator.detail1).should('contain',m2)
                  }
            })
        }) 
    }
    

}
export default Home