const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth20').Strategy;


function iniPassport() {

    // Configurar la estrategia local
    passport.use(new LocalStrategy(
    function(username, password, done) {
        // Trabajar en la lógica de autenticación local
    }
    ));

    // Configurar la estrategia de Google
    passport.use(new GoogleStrategy({
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    function(accessToken, refreshToken, profile, cb) {
        // Trabajar en la lógica de autenticación con Google
    }
    ));
}

module.exports = iniPassport;