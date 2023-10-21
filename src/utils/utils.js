const { default: mongoose } = require("mongoose");
require ('dotenv').config
async function connectMongo() {
// Conexión a la base de datos
mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.zd7jdud.mongodb.net/?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Conexión exitosa a la base de datos'))
.catch(err => console.log('Error de conexión a la base de datos', err));

}

module.exports = { connectMongo };