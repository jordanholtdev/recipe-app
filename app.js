const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');


const recipeRoutes = require('./routes/recipeRoutes');
const subRoutes = require('./routes/subscripeRoutes');

require('dotenv').config();

const port = process.env.PORT || 3000;

// express app
const app = express();

//connect mongoDB and then listen for requests
const dbURI = mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => {
        app.listen(port, () => {
            console.log('listening at http://localhost:3000')
        });
    })
    .catch((err) => console.log(err));

// resgister view engine
app.set('view engine', 'ejs');

// middleware 
app.use(express.static('public'));
app.use('/bootstrap', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('common'));
app.use(helmet());

//routes
app.get('/', (req, res) => {
    res.redirect('/recipes')
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// recipe routes
app.use('/recipes', recipeRoutes);

// subscribe routes 
app.use('/subscribe', subRoutes);

//404 page
app.use((req,res) => {
    res.status(404).render('404');
})