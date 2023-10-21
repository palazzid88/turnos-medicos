// index.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const iniPassport = require('./config/passport.config.js');
const passport = require('passport');
const { connectMongo } = require('./utils/utils.js');
require('dotenv').config();

// Mongo en utils/utils.js
connectMongo()

// Configuración de la ruta de inicio
app.get('/', (req, res) => {
    res.send('app Turnos Médicos');
});

// Inicializar Passport
// iniPassport();
// app.use(passport.initialize());
// app.use(passport.session());


// Puerto en el que se ejecutará el servidor
const PORT = 3000;

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`start server:  http://localhost:${PORT}`);
});