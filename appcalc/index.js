const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const calculadoraRoutes = require('./src/routes/calculadoraRoutes');

app.use('/', calculadoraRoutes);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
