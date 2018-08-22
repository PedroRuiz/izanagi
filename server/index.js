/**
* Name: index
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/index
*
* Created:  21 Aug 2018
*
*
* Description: node index for izanagi
*
* Requirements: express, morgan, mogoose, cors, nodemon
*
* @package
* @property
*
* @version 1.0
*/

const express = require('express');
const morgan = require('morgan');
const app = express();
const cors = require('cors');

const { mongoose } = require('./database');

const URL_version = '/izanagi/v1';


/**
 * S E T I N G S
 */
app.set('port', process.env.PORT || 3000);
mongoose.set('useCreateIndex',true);
mongoose.set('createIndexes', true);

/**
 * M I D D L E W A R E S
 */
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));
 
/**
 * R O U T E S
 */
app.use(`${URL_version}/clients`, require('./routes/clients.routes'));


/**
 * S T A R T I N G   S E R V E R
 */
app.listen(app.get('port'), (error) => {
    if (error) {
        console.log('\nError on server: ', err);
    }
    else {
        console.log('\nServer on port', app.get('port'));
    }
});

/** this ends this file
* server/index
**/
