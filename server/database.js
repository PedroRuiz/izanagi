/**
* Name: database
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/database
*
* Created:  21 Aug 2018
*
*
* Description: mongo database connection
*
* Requirements: mongoose
*
* @package izanagi
* @property
*
* @version 1.0
*/

const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/izanagi';

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then( () => console.log(`\n${URI} is connected\n`))
    .catch( err => console.log(`Error en Mongo: ${err}`));


module.exports = {
    mongoose: mongoose
};

/** this ends this file
* server/database
**/
