/* jshint esversion: 6 */
const express = require('express')
const ejs = require('ejs');
const bodyParser = require('body-parser');

const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        heading: "GuessMe"
    });
});

app.get('/instructions', (req, res) => {
    res.render('instructions', {
        heading: "Instructions"
    });
});

app.get('/play-game', (req, res) => {
    res.render('play-game', {
        heading: "Play Game",
    });
});

app.listen(3000, () => {
    console.log('server running on port 3000...');
});