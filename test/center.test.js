const chai = require('chai')
const chaiHTTP = require('chai-http')
const server = require('../server')

//assertion style
chai.should()
chai.use(chaiHTTP)
// TEST API CENTERS
describe('Centers API', () => {
    //TEST GET ROUTE
    describe(' GET /centers', () => {
        it('it should get all centers', (done) => {
            chai.request(server)
                .get('/centers')
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
    describe(' GET /centers/:idCenter', () => {
        it('it should get one center by giving id', (done) => {
            const idCenter = '619bca376b94cc5c8a25415f'
            chai.request(server)
                .get(`/centers/${idCenter}`)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    //TEST DELETE CENTER
    describe(' DELETE /centers/:idCenter', () => {
        it('it should delete one center by giving id', (done) => {
            const idCenter = '619bca376b94cc5c8a25415f'
            chai.request(server)
                .delete(`/centers/${idCenter}`)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    //TEST UPDATE CENTER
    describe(' PUT /centers/:idCenter', () => {
        it('it should update one center by giving id', (done) => {
            const idCenter = '619bca376b94cc5c8a25415f'
            chai.request(server)
                .put(`/centers/${idCenter}`)
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
})
