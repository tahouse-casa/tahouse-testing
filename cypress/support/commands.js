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