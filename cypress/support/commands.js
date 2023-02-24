// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

// Funcion para ocultar caracteres en al typear datos en los campos de entrada de datos
    Cypress.Commands.overwrite('type',(originalFn,element,text,options)=>{
        if(options && options.sensitive){
            options.log = false
            Cypress.log({
               $el: element,
               name: 'type',
               message: '*'.repeat(text.length) 
            })
        }
        return originalFn(element,text,options)
    })
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
    Cypress.Commands.add('login',(user,password)=>{
        cy.get('[name="email"]').type(user)
        cy.get('[name="password"]').type(password,{sensitive:true})
        cy.get('button').eq(1).click()
    })

    Cypress.Commands.add('selectGroup',(op,type,state,pais,city)=>{
        cy.get('select').eq(0).select(op).type(op)
        cy.get('select').eq(1).select(type).type(type)
        cy.get('select').eq(2).select(state).type(state)
        cy.get('select').eq(3).select(pais).type(pais)
        cy.get('select').eq(4).select(city).type(city)
    })

    Cypress.Commands.add('inputGroup1',(address,env,mts2,room,bath,price,descipt)=>{
        cy.get('[name="address"]').type(address)
        cy.get('[name="environments"]').type(env)
        cy.get('[name="meters"]').type(mts2)
        cy.get('[name="rooms"]').type(room)
        cy.get('[name="bathrooms"]').type(bath)
        cy.get('[name="price"]').type(price)
        cy.get('textarea').type(descipt)
    })

    Cypress.Commands.add('clearInputsGroup1',()=>{
        cy.get('[name="address"]').clear()
        cy.get('[name="environments"]').clear()
        cy.get('[name="meters"]').clear()
        cy.get('[name="rooms"]').clear()
        cy.get('[name="bathrooms"]').clear()
        cy.get('[name="price"]').clear()
        cy.get('textarea').clear()
    })

    Cypress.Commands.add('inputGroup2',(phone,email)=>{
        cy.get('[name="phone"]').type(phone)
        cy.get('[name="email"]').type(email)
    })

    Cypress.Commands.add('clearInputsGroup2',()=>{
        cy.get('[name="phone"]').clear()
        cy.get('[name="email"]').clear()
    })
    
    Cypress.Commands.add('latitud',(num1,num2,num3,num4)=>{
        cy.get('[name="value1"]').eq(0).type(num1)
        cy.get('[name="value2"]').eq(0).type(num2)
        cy.get('[name="value3"]').eq(0).type(num3)
        cy.get('[name="value4"]').eq(0).type(num4)
    })

    Cypress.Commands.add('clearLatitud',()=>{
        cy.get('[name="value1"]').eq(0).clear()
        cy.get('[name="value2"]').eq(0).clear()
        cy.get('[name="value3"]').eq(0).clear()
        cy.get('[name="value4"]').eq(0).clear()
    })

    Cypress.Commands.add('longitud',(num1,num2,num3,num4)=>{ 
        cy.get('[name="value1"]').eq(1).type(num1)
        cy.get('[name="value2"]').eq(1).type(num2)
        cy.get('[name="value3"]').eq(1).type(num3)
        cy.get('[name="value4"]').eq(1).type(num4)
    })

    Cypress.Commands.add('clearLongitud',()=>{
        cy.get('[name="value1"]').eq(1).clear()
        cy.get('[name="value2"]').eq(1).clear()
        cy.get('[name="value3"]').eq(1).clear()
        cy.get('[name="value4"]').eq(1).clear()
    })

    Cypress.Commands.add('addcountry',(pais,city)=>{
        cy.get('[name="country"]').type(pais)
        cy.get('[name="0"]').type(city)
    })

    Cypress.Commands.add('clearCountry',()=>{
        cy.get('[name="country"]').clear()
        cy.get('[name="0"]').clear()
    })

    Cypress.Commands.add('deletecountry',(num)=>{
        cy.get('.button-delete-country').eq(num).click()
    })

    Cypress.Commands.add('editCountry',(num)=>{
        cy.get('.button-edit-country').eq(num).click()
    })

    Cypress.Commands.add('assertionCheck',(text)=>{
        cy.contains(text).should('contain',text)
    })

    Cypress.Commands.add('inputEmail',(text,text2)=>{
        cy.get('[name="email"]').should('have.attr', 'placeholder', text).type(text2)
    })

    Cypress.Commands.add('inputPass',(text,text2)=>{
        cy.get('[name="password"]').should('have.attr', 'placeholder', text).type(text2,{sensitive:true})
    })

    Cypress.Commands.add('inputPass2',(text,text2)=>{
        cy.get('[name="password2"]').should('have.attr', 'placeholder', text).type(text2,{sensitive:true})
    })

    Cypress.Commands.add('msjAviso',(text,text2)=>{
        cy.contains(text).should(text2)
        .and('contain',text)
    })

    Cypress.Commands.add('searchInputName',(text,text2)=>{
        cy.get(`[name="${text}"]`).should(text2)
        
    })

    Cypress.Commands.add('typeInputName',(text,text2)=>{
        cy.get(`[name="${text}"]`).type(text2)
        
    })

    Cypress.Commands.add('searchPlaceholder',(text,text2)=>{
        cy.get(`[name="${text}"]`).should('have.value',text2)
    })

    Cypress.Commands.add('inputWidth',(text,width)=>{
        cy.get(`[name="${text}"]`).should('have.css','width',width)
    })

    Cypress.Commands.add('path',(text,text1)=>{
        cy.location().should((location)=>{
            expect(location.protocol).to.eq(text)
            expect(location.pathname).to.eq(text1)
          }) 
    })

    Cypress.Commands.add('searchImg',(num,text)=>{
        cy.get('img').eq(num).should('have.attr','src',text)
    })

    Cypress.Commands.add('link',(num,text)=>{
        cy.get('a').eq(num).click()
        .and('equal',text)
    })

    Cypress.Commands.add('checkInputType',(text,text2,text3)=>{
        cy.get(`[name="${text}"]`).should('have.attr',text2,text3)
    })

    Cypress.Commands.add('Cardsize',(num,width,height)=>{
        cy.get('.cAOvxN').eq(num).should('have.css','width',width).and('have.css','height',height)
    })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })