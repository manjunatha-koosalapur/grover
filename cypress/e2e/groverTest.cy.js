///<reference types = "Cypress" />

describe('Validate the response from jokes/random endpont', ()=>{
    
    it('test:1 random jokes response', ()=>{
    cy.request({
        method: 'GET',
        url: '/jokes/random',

    }).then((response)=>{
        expect(response.status).to.eq(200)
        expect(response.body).to.not.be.null
        expect(response.body.categories).to.eql([])
        expect(response.body.created_at).contains('2020-01-05')
        expect(response.body.icon_url).to.eql('https://assets.chucknorris.host/img/avatar/chuck-norris.png')
        expect(response.body.updated_at).contains('2020-01-05')
        expect(response.body.url).contains('https://api.chucknorris.io/jokes')
        expect(response.body.value).contains('Chuck Norris')
        expect(response.headers).to.include({'content-type': 'application/json;charset=UTF-8'})
        expect(response.duration).to.not.be.greaterThan(1800)
        // expect(response.duration).to.be.lessThan(200) //to fail the test
        })
    })
})