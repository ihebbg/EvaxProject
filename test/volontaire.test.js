const chai = require('chai')
const chaiHTTP = require('chai-http')
const server = require('../server')
//assertion style
chai.should()
chai.use(chaiHTTP)
// TEST API VOLONTAIRES

describe('Volontaires API', () => {
    //TEST GET ROUTE
    describe(' GET /volontaires', () => {
        it('it should get all volontaires', (done) => {
            chai.request(server)
                .get('/volontaires')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    // //TEST POST
    // describe(' POST /centers', () => {
    //     it('it should post one center ', (done) => {
    //         chai.request(server)
    //             .post('/centers')
    //             .end((err, response) => {
    //                 response.should.have.status(200)
    //                 response.body.should.be.a('object')
    //             })
    //         done()
    //     })
    // })
    //TEST GET BY ID
    describe(' GET /volontaires/:idVolontaire', () => {
        it('it should get one volontaire by giving id', (done) => {
            const idVolontaire = '619bca376b94cc5c8a25415f'
            chai.request(server)
                .get(`/volontaires/${idVolontaire}`)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    //TEST DELETE CENTER
    describe(' DELETE /volontaires/:idVolontaire', () => {
        it('it should delete one volontaire by giving id', (done) => {
            const idVolontaire = '619bca376b94cc5c8a25415f'
            chai.request(server)
                .delete(`/volontaires/${idVolontaire}`)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    //TEST UPDATE CENTER
    describe(' PUT /volontaires/:idVolontaire', () => {
        it('it should update one volontaire by giving id', (done) => {
            const idVolontaire = '619bca376b94cc5c8a25415f'
            chai.request(server)
                .put(`/volontaires/${idVolontaire}`)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
})
