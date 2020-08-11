let chai = require('chai')
let chaiHttp = require('chai-http')
const expect = require('chai').expect
let app = require('../index')
let multiplicacion = require('../multiplicacion')

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


describe("Multiplicacion: ",function(){
    it("Realiza la multiplicacion de dos numeros, 4 y 2",function(){
        multiplicacion.multiplicacion(4,2)
    })
})


