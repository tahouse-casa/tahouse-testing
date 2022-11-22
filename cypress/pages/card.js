

class Card {

    checkCarrouselCards(text,num1,num2){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.allimgCards1).eq(0).click().then(()=>{
                cy.get(locator.cardImg).should(text)
                .should('have.css','height',num1)
                .and('have.css','width',num2)
                .invoke('attr','src').should('include','s7aIBGDKuRDDEDu7OhI8gFHMHtZNzs6') 
            })
            cy.get(locator.sliderLeft).click().then(()=>{
                cy.get(locator.cardImg).should('be.visible')
                .should('have.css','height','200px')
                .and('have.css','width','344.5454406738281px') 
                .invoke('attr','src').should('include','1Q6C2lRN0LEnkSoHsrrID_He1uGe-a30E')
            })
            cy.get(locator.sliderLeft).click().then(()=>{
                cy.get(locator.cardImg).should('be.visible')
                .should('have.css','height','200px')
                .and('have.css','width','344.5454406738281px') 
                .invoke('attr','src').should('include','n0rGFmHpEZSZvCWST8ugSy7Oz')
            })
        })
    }
    
    clickCard(num){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.allimgCards1).eq(num).click()   
      })
    }

    checkCardDetail(num,text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.dataCard1).eq(num).contains(text)
        })
    }

    checkCardPrice(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.cardPrice).contains(text)
        })
    }

    checkCardUbi(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.cardUbi).should(text)
        })
    }

    checkCardState(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.cardState).should(text)
        })
    }

    checkCardZone(text){
        cy.fixture('locators').then((locator)=>{
            cy.get(locator.cardZone).should('contain',text)
        })
    }
}

export default Card



