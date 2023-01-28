// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
    Cypress.Commands.add('loginAdmin',(user,password)=>{
        cy.get('[name="email"]').type(user)
        cy.get('[name="password"]').type(password)
        cy.get('button').eq(0).click()
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

    Cypress.Commands.add('inputGroup2',(phone,email)=>{
        cy.get('[name="phone"]').type(phone)
        cy.get('[name="email"]').type(email)
    })
    
    Cypress.Commands.add('deleteInmueble',()=>{
        cy.get('.sc-Dmqmp > :nth-child(1) > :nth-child(2) > :nth-child(2)').click()// Click en Borrar
    })

    Cypress.Commands.add('editPais',()=>{
        cy.get('.sc-Dmqmp > :nth-child(10) > :nth-child(2) > :nth-child(1)').click()// Click en Modificar
    })

    Cypress.Commands.add('latitud',(num1,num2,num3,num4)=>{
        cy.get('[name="value1"]').eq(0).type(num1)
        cy.get('[name="value2"]').eq(0).type(num2)
        cy.get('[name="value3"]').eq(0).type(num3)
        cy.get('[name="value4"]').eq(0).type(num4)
    })

    Cypress.Commands.add('longitud',(num1,num2,num3,num4)=>{ 
        cy.get('[name="value1"]').eq(1).type(num1)
        cy.get('[name="value2"]').eq(1).type(num2)
        cy.get('[name="value3"]').eq(1).type(num3)
        cy.get('[name="value4"]').eq(1).type(num4)
    })

    Cypress.Commands.add('addcountry',(pais,city)=>{
        cy.get('[name="country"]').type(pais)
        cy.get('[name="0"]').type(city)
    })

    Cypress.Commands.add('deletecountry',()=>{
      
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