const chai = require('chai')
const chaiHTTP = require('chai-http')
//const { deleteOne } = require('../models/personne')
const server = require('../server')
//assertion style
chai.should()
chai.use(chaiHTTP)

//TEST inscription personne
describe('PERSONNE INSCRIT', () => {
 
    describe(' POST /register', () => {
        it('it should login with success', (done) => {
            chai.request(server)
                .post('/register')
                .end((err, response) => {
                    response.should.have.status(200)
                    response.body.should.be.a('object')
                })
            done()
        })
    })
    
})
