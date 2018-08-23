/**
* Name: products.routes
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/routes/products.routes
*
* Created:  23 Aug 2018
*
*
* Description: server routes and actions for products
*
* Requirements: express, '../controllers/products.controller'
*
* @package izanagi
* @property
*
* @version 1.0
*/

const express = require('express');
const router = express.Router();

Controller = require('../controllers/products.controller');

const productsController = Controller;

router.get('/', productsController.getProducts);
//router.get('/:id', productsController.getProduct);

module.exports = router;
/** this ends this file
* server/routes/products.routes
**/
