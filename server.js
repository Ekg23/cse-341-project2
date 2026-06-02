const express = require('express');
const app = express();
const mongodb = require('./data/database');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const GitHubStrategy = require('passport-github2').Strategy;
const cors = require('cors');


const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

app.use(cors({ methods: ['GET', 'POST', 'PUT', 'DELETE', 'UPDATE', 'PATCH'] }));
app.use(cors({ origin: '*' }));
app.use('/', require('./routes/index.js'));

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: process.env.CALLBACK_URL
},
function(accessToken, refreshToken, profile, done) {
    return done(null, profile);
}));

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});


app.get('/', (req, res) => {
    res.send(req.session.user !== undefined ? `Logged in as ${req.session.user.displayName}` : "Logged out")
});

app.get('/auth/github/callback', passport.authenticate('github', {
    failureRedirect: '/api-docs'}),
    (req, res) => {
    req.session.user = req.user;
    res.redirect('/');
});

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 
        'Origin, X-Requested-With, Content-Type, Accept, Z-Key'
    );
    res.setHeader('Access-Control-Allow-Headers', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});






mongodb.initDb((err) => {
    if (err) {
        console.log(err);
    } else {
        app.listen(PORT, () => {console.log(`Database is listening and node running on port ${PORT}`);});
    }
})