import Login from "../../pages/login"

const urlTaHouseLogin = 'https://dev.tahouse.casa/login'
const apiProperties = 'https://api.dev.tahouse.casa/api/v1/properties'
const apiCountries = 'https://api.dev.tahouse.casa/api/v1/countries'
const apiFavorites = 'https://api.dev.tahouse.casa/api/v1/favorites'
const apiUsers = 'https://api.dev.tahouse.casa/api/v1/users'
const apiLogin = 'https://api.dev.tahouse.casa/api/v1/auth/login'
const apiRecovery = 'https://api.dev.tahouse.casa/api/v1/auth/recovery'
const apiChangePassword = 'https://api.dev.tahouse.casa/api/v1/auth/change-password'

const login = new Login

describe('Mobile | Api Testing',{  
    viewportWidth:380,viewportHeight:670},() => {

    beforeEach(() => {
        login.loginAdmin(urlTaHouseLogin)     
    });

    it('Test Api Countries', () => {
        cy.wait(2000).then(()=>{
           cy.request('https://api.dev.tahouse.casa/api/v1/countries').then((e)=>{
            expect(e).property('status').to.equal(200)
            expect(e).property('headers')
            expect(e).property('duration')
            expect(e.body[0]).property('id').to.be.a('number')
            expect(e.body[0]).property('country').to.be.a('string')
            expect(e.body[0]).property('latitud').to.be.a('string')
            expect(e.body[0]).property('longitud').to.be.a('string')
            expect(e.body[0]).property('citys').to.be.a('array')
           })
        })
 
    });

    it('Test Api Properties', () => {
        cy.wait(2000).then(()=>{
           cy.request('https://api.dev.tahouse.casa/api/v1/properties').then((e)=>{
            expect(e).property('status').to.equal(200)
            expect(e).property('headers')
            expect(e).property('duration')
            expect(e.body[0]).property('id').to.be.a('number')
            expect(e.body[0]).property('city').to.be.a('string')
            expect(e.body[0]).property('country').to.be.a('string')
            expect(e.body[0]).property('address').to.be.a('string')
            expect(e.body[0]).property('meters').to.be.a('number')
            expect(e.body[0]).property('rooms').to.be.a('number')
            expect(e.body[0]).property('environments').to.be.a('number')
            expect(e.body[0]).property('typeOperation').to.be.a('string')
            expect(e.body[0]).property('bathrooms').to.be.a('number')
            expect(e.body[0]).property('price').to.be.a('number')
            expect(e.body[0]).property('state').to.be.a('string')
            expect(e.body[0]).property('type').to.be.a('string')
            expect(e.body[0]).property('phone').to.be.a('string')
            expect(e.body[0]).property('email').to.be.a('string')
            expect(e.body[0]).property('urlImage').to.be.a('array')
            expect(e.body[0]).property('description').to.be.a('string')
            })
        })
    });
    
    it('Test Api Favoritos', () => {
        cy.request('https://api.dev.tahouse.casa/api/v1/favorites').then((e)=>{
            expect(e).property('status').to.equal(200)
            expect(e).property('headers')
            expect(e).property('duration')
            expect(e.body[0]).property('id').to.be.a('number')
            expect(e.body[0]).property('userId').to.be.a('number')
            expect(e.body[0]).property('propertyId').to.be.a('number')
        })
    });

    it('Test Api Users', () => {
        cy.request('https://api.dev.tahouse.casa/api/v1/users').then((e)=>{
            expect(e).property('status').to.equal(200)
            expect(e).property('headers')
            expect(e).property('duration')
            expect(e.body[0]).property('id').to.be.a('number')
            expect(e.body[0]).property('email').to.be.a('string')
            expect(e.body[0]).property('role').to.be.a('string')
            expect(e.body[0]).property('name').to.be.a('null')
            expect(e.body[0]).property('city').to.be.a('null')
            expect(e.body[0]).property('country').to.be.a('null')
            expect(e.body[0]).property('phone').to.be.a('null')
        })
    });
    
});