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
        code : { type: String, required: true, unique: true, trim: true },
        description : { type: String, required: true, trim: true },
        size : { type: Number, required: false },
        sizeUnit : { type: String, required: false, trim: true, enum: ['mm','cm','m','gr','kg','inch','feet'], default: 'mm' },
        weight : { type: Number, required: false },
        price : { type: Number, required: true },
        discount : { type: Number, required: false },
        onSale: { type: Boolean, default: false },
        stock : { type: Number, required: true, default: 0},
        brokenStock : { type: number, required: true},
        toServe : { type: Number, required: false, default: 0 },
        toReceive : { type: Number, required: false, default: 0 },
        ubication : { type: String, required: false },
        images: [
                { image: String, requied: true },
                { requied: false }
        ],
        orders: [
            {
                date: { type: Date, requied: true },
                units: { type: Number, requied: true }
            },{ requied: false }
        ]
    },{timestamps: true, autoIndex: true}
);



module.exports = mongoose.model('products', ProductSchema);


/** this ends this file
* server/models/products
**/
