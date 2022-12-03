

class Home {

    checkFooter1(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome1).should(text2).and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome1).click()
                cy.get(locator.textFooter1).should(text2)
                
            })
        })
    }
    checkFooter2(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome2).should(text2).and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome2).click()
                cy.get(locator.textFooter2).should(text2)
            })
        })
    }
    checkFooter3(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome3).should(text2).and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome3).click()
                cy.get(locator.textFooter3).should(text2)
            })
        })
    }

    checkFooter4(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHome4).should(text2).and('have.text',text).then(()=>{
                cy.get(locator.footerItemHome4).click({force: true})
                cy.get(locator.textFooter4).should(text2)
            })
        })
    }

    checkFooterTitulo(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.footerItemHomeTit).should('contain',text)
            cy.log('El titulo en footer debe contener "TA House"')
          }) 
    }

    search(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.inputSearch).type(text)
            cy.get(locator.btnsearch).click()
            cy.request('https://dev.tahouse.casa/').should((response)=>{
                expect(response.status).to.eq(200)
                cy.log('status 200 ok')
            })
        })
    }

    checkProperty(url){
        cy.url().should('eq',url)
        cy.document().should('have.property','charset').and('eq','UTF-8')
    }

    checkProperty2(text){
        cy.title().should('eq',text)
    }

    checkDataCardBtn(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.button).each(($el)=>{
              cy.get(locator.button).should(text)
            })
        }) 
    }
    
    checkDataCardImg(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.imagen).each(($el)=>{
              cy.get(locator.imagen).should(text)
            })  
        }) 
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
                    cy.get(locator.direccion).should(prop)
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

    checkTitulosGuia(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.titulosGuiaCompra).each(($el)=>{
              cy.get(locator.titulosGuiaCompra).should(text)
            })  
        }) 
    }
    
    checkTextSub(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.textGuiaCompra).each(($el)=>{
              cy.get(locator.textGuiaCompra).should(text)
            })  
        }) 
    }

    checkitems2(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.img2).should(text)
            .should('have.css','height','304px')
            .and('have.css','width','363px') 
            // .invoke('attr','src').should('include','57c88479058d0526c2af')
            cy.get(locator.logo).should(text)
            .invoke('attr','src').should('include','logo-bg')
            cy.get(locator.btnProp).should(text)
            cy.get(locator.textlogo).should('have.text',text2)
        })
    }

    checkTitulo1(text){
        cy.contains('Inmuebles Destacados').then((e)=>{
          cy.fixture('locators').then((locator)=>{
            let estado = e.text()
                if(estado == text){
                    cy.log('El Titulo Contiene Inmuebles Destacados')
                    cy.get(locator.text2).should('have.text',`${estado}`)// Probamos que el titulo no es correcto
                }else{
                    cy.log('El titulo contiene "Inmuebles destacados"')
                    cy.get(locator.text2).should('have.text','Inmuebles Destacados')// Probamos que el titulo es correcto
                }
            })   
          })
    }

    checkTitulo2(){
        cy.fixture('locators')
    }

    checkCards1(text,height,width,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnProp).click().then(()=>{
                cy.get(locator.allimgCards1).each((e)=>{
                   cy.get(locator.allimgCards1).should(text)
                   .should('have.css','height',height)
                   .should('have.css','width',width)
                   .invoke('attr','src').should('include',text2)
                })
            })
            
        })
    }

    checkFilter1(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnProp).click().then((e)=>{
                cy.get(locator.btnAllProp).should('be.visible')
                cy.get(locator.inputAllProp).type(text)
                cy.get(locator.btnAllSearch).click()
            }) 
        })
    }

    checkPaginacion1(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnProp).click().then(()=>{
                cy.get(locator.paginacionLeft).should(text)
                cy.get(locator.paginacion1).should(text)
                cy.get(locator.paginacion2).should(text)
                cy.get(locator.paginacionRight).should(text)
            })
            cy.get(locator.inputAllProp).type('brasil')
            cy.get(locator.btnAllProp).click()
            cy.get(locator.paginacionRightAll).should(text)
        })
    }

    checkCardsLimit(num){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnProp).click()
            cy.get(locator.allimgCards1).should('have.length',num)
        })
    }

    checkCardsLimit2(num){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.imagen).should('have.length',num)
        })
    }

    checkBtnFilter1(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.btnFilter).should('contain',text)
            })
        })
    }

    inputsMts2(num){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.inputsForm1).should('have.length',num)
            })
            
        })
    }

    checkBtnMap(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnMap).click().then(()=>{
                cy.get(locator.GoogleMap).should(text2)
                cy.get(locator.btnMap).should('contain',text)    
            })
        })
    }

    checkInputAmb(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.formInputs).eq(0).should(text)
                cy.get(locator.labelsForm).eq(1).should('have.text',text2)
            })
        })
    }

    checkInputBaños(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.formInputs).eq(1).should(text)
                cy.get(locator.labelsForm).eq(2).should('have.text',text2)
            })
        })
    }

    checkInputDorm(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.formInputs).eq(2).should(text)
                cy.get(locator.labelsForm).eq(3).should('have.text',text2)
            })
        })
    }

    checkInputPrecio(text,text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.formInputs).eq(3).should(text)
                cy.get(locator.labelsForm).eq(4).should('have.text',text2)
            })
        })
    }

    checkInputsPais(text2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.btnFilter).click().then(()=>{
                cy.get(locator.labelsForm).eq(0).should('have.text',text2)
            })
        })
    }

    bucle(num){
        for (let i = 0; i < num ; i++) {
            cy.log("N° "+ i)
             
       }  
    }
}
export default Home