const chai = require('chai')
const chaiHTTP = require('chai-http')
const { deleteOne } = require('../models/center')
const server = require('../server')
//assertion style
chai.should()
chai.use(chaiHTTP)

//TEST AUTH ADMIN /OPERATEUR
describe('ADMIN AUTH', () => {
    //TEST AUTH ADMIN
    describe(' POST /register_admin', () => {
        it('it should login with success', (done) => {
            chai.request(server)
                .post('/login_admin')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    //TEST AUTH OPERATEUR
    describe('OPERATEUR AUTH', () => {
        describe(' POST /register_operateur', () => {
            it('it should login with success', (done) => {
                chai.request(server)
                    .post('/login_operateur')
                    .end((err, response) => {
                        response.should.have.status(200)
                        response.body.should.be.a('object')
                    })

                done()
            })
        })
    })
})
