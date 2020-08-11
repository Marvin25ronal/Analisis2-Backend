const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Calculadora :)').end();
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Servidor web escuchando en el puerto ${PORT}`);
});

module.exports = app
