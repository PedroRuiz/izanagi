/**
* Name: products.controller
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/controllers/products.controller
*
* Created:  22 Aug 2018
*
*
* Description: Controller for products
*
* Requirements: '../models/products'
*
* @package
* @property
*
* @version 1.0
*/

const productController = {};
const Products = require('../models/products');

const Error = {
    'package': 'izanagi',
    'controller': 'clients',
    'error': ''
};

const Ok = {
    'status': '200',
    'response': 'Ok'
};

productController.getProducts = async (req, res) => {

    try {
        await Products.updateMany(
            {},
            { $inc: { __q: 1 } }
        )
            .catch( (err) => {
                console.log(err);
            })
    } catch (e) {
        throw e;
    };

    const products = await Products.find();

    res.json(products);

};

productController.createProduct = async (req, res) => {
    
    const product = new Products(req.body);

    await product.save ((err) => {
        if (err) {
            Error.error = err;
            res.status('415').json(err);
        }
        else {
            res.json(Ok);
        }
    })
};

productController.getProduct = async (req, res) => {
    const id = req.params._id;

    try {
        await Products.updateMany(
            {_id: id},
            { $inc: { __q: 1 } }
        )
            .catch((err) => {
                console.log(err);
            })
    } catch (e) {
        throw e;
    };

    const products = await Products.find({_id: id});

    res.json(products);

};


module.exports = productController;
/** this ends this file
* server/controllers/products.controller
**/
