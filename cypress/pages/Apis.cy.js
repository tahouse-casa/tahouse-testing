
const apiProperties = 'https://api.dev.tahouse.casa/api/v1/properties'

describe('', () => {

    it('Api Countries', () => {
        cy.visit(urlTaHouse)
        cy.wait(2000).then(()=>{
            fetch('https://api.dev.tahouse.casa/api/v1/countries')
            .then((res)=>res.json())
            .then((data)=>{ 
                data.map((e)=>{
                    console.log(e.country)
                })
            })    
        })
    });

    it('Api Inmueble', () => {
        cy.visit(urlTaHouseProperty)
        cy.wait(2000).then(()=>{
        cy.request('GET','https://api.dev.tahouse.casa/api/v1/properties')
        }).then((e)=>{
            expect(e).property('status').to.equal(200)
            expect(e.body[0]).property('address').to.be.a('string')
            expect(e.body[0]).property('bathrooms').to.be.a('number')
            expect(e.body[0]).property('city').to.be.a('string')
            
            console.log(e.body)
        })
    });


});