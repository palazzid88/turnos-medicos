// index.js
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const iniPassport = require('./config/passport.config.js');
const passport = require('passport');


// Conexión a la base de datos
mongoose.connect('mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.zd7jdud.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(err => console.log('Error de conexión a la base de datos', err));

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