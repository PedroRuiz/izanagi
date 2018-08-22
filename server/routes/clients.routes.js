/**
* Name: clients.routes
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/routes/clients.routes
*
* Created:  21 Aug 2018
*
*
* Description: server routes/actions for clients
*
* Requirements: express
*
* @package
* @property
*
* @version 1.0
*/

const express = require('express');
const router = express.Router();

const clientsController = require('../controllers/clients.controller');

router.get('/', clientsController.getClients);
router.get('/:id', clientsController.getClient);

router.post('/', clientsController.createClient);

router.put('/:id', clientsController.putClient);

router.delete('/:id', clientsController.deleteClient);


module.exports = router;
/** this ends this file
* server/routes/clients.routes
**/
