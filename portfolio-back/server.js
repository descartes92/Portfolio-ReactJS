const express = require('express'),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose'),
    app = express(),
    bcrypt = require('bcrypt'),
    jwt = require('jsonwebtoken');


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Initialisation de la connexion a la base de données
mongoose.connect('mongodb://localhost/todoList', { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true });

// récupérations demes models: 

let formulaire = require('./models/formulaire');
let projects = require('./models/projects');
let skills = require('./models/skills')

// du formulaire




app.listen(3000);