let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect
let app = require('../index')

chai.use(chaiHttp)
chai.should()

describe("Calculadora: ",() =>{
    describe("GET /",() =>{
        it("Se inicio Correctamente",(done) =>{
            chai.request(app)
            .get('/')
            .end(function(err,response,body){
                if(err) done(err)
                else done()
            })
        })
    })
})