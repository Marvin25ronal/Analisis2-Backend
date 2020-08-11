
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

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`);
});

module.exports = app
