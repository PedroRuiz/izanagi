/**
* Name: products
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/models/products
*
* Created:  22 Aug 2018
*
*
* Description: Products data model
*
* Requirements: mongoose
*
* @package izanagi
* @property
*
* @version 1.0
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema(
    {
        code : { type: String},
        
        
        
        __q : { type: Number, required: true }
    },{timestamps: true, autoIndex: true }
);



module.exports = mongoose.model('products', ProductSchema);


/** this ends this file
* server/models/products
**/
