
describe('Testing connection with API', ()=> {
    it('Connection', ()=> {
        cy.request  ({
            method: 'GET',
            url: 'http://seubarriga.wcaquino.me/'
        }).as('response')
        cy.get('@response').should((response)=> {
            expect(response.status).to.equal(200)
        })
    })

    it('Login user', ()=> {
        cy.request ({
            method: 'POST',
            url: 'https://barrigarest.wcaquino.me/signin',
            body:{
                email: "reinkmakoi@gmail.com.br",
                senha: "123456"
            }
        }).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200),
            expect(response.body.id).to.equal(32377)
            expect(response.body.nome).to.equal('Reink Makoi')
            expect(response.body.token).to.equal('token')   

        })
    })
    it('Get account', () => {
        cy.request ({
            url: 'https://barrigarest.wcaquino.me/contas',
            method: 'GET',
            headers: {
                'Authorization' : 'JWT ' + token,
            }
        }).as('response')
        cy.get('@response').should((response)=>{
            expect(response.status).to.equal(200)

        })

    })
})