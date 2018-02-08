/* This file is the server for simulation 2. It runs express as its main backbone with massive and session as its two other major components.*/ 
require('dotenv').config(); //To keep private data
const express = require('express'); //To set up our server.
const bodyParser = require('body-parser'); //To change JSON to JS.
const cors = require('cors'); //To allow other ports to use this API
const massive = require('massive'); //To connect to our database at Heroku.
const session = require('express-session');
const userController = require('./controllers/userControler'); //Import Controlers.
const propController = require('./controllers/propControler');
const checkForSession = require('./middleware/checkForSession'); //Import Session middleware
const authorizationCheck = require('./middleware/authorizationCheck');

//Configure our server:
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
 secret: process.env.SESSION_SECRET,
 resave: false,
 saveUninitialized: true
}));
app.use(( req, res, next ) => checkForSession( req, res, next ));

//Connect to database:
massive( process.env.CONNECTION_STRING ).then( db => app.set( 'db', db ));

//User API commands:
app.post( '/api/auth/login', userController.login ); //Sets the user information on the session. On success return a status of 200 and the user object {id, username}. On failure return a status of 500.
app.post( '/api/auth/register', userController.register ); //Registers a user to the database. Sets the user information on the session. On success return a status of 200 and the user object {id, username}. On failure return a status of 500.
app.post( '/api/auth/logout', userController.logout ); //Destroys the session. Sends a status of 200.

//Property API commands:
app.post( '/api/properties', authorizationCheck, propController.createNew ); //Creates a new property. Returns all the properties associated with the logged in user.
app.get( '/api/properties', authorizationCheck, propController.getProps ); //Returns all properties associated with the logged in user. Accepts an optional query that filters all properties associated with the logged in user by "desired rent". Returns all the filtered properties.
app.delete( '/api/properties/:id', authorizationCheck, propController.deleteProp ); //Deletes a property. Returns all the properties associated with the logged in user.

//Set server to listen for incoming changes.
const port = process.env.CONNECTION_PORT || 3000;
app.listen( port, () => console.log( `Hailing frequencies open on port ${port}...` ));