
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Calculadora :)').end();
});

//Suma
app.get('/suma', (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
	var s = require('./suma.js');
	res.send(String(s.suma(n1,n2))).end();
})

//Resta
app.get('/resta', (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
	var r = require('./resta.js');
	res.send(String(r.resta(n1,n2))).end();
})

//Multiplicación
app.get('/multiplicacion', (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
	var m = require('./multiplicacion.js');
	res.send(String(m.multiplicacion(n1,n2))).end();
})

//División
app.get('/division', (req, res) => {
    var n1 = parseInt(req.query.n1);
    var n2 = parseInt(req.query.n2);
	var d = require('./division.js');
	res.send(String(d.division(n1,n2))).end();
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`);
});

module.exports = app
