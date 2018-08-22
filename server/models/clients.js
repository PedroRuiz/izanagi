/**
* Name: clients
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/models/clients
*
* Created:  21 Aug 2018
*
*
* Description: Clients data model
*
* Requirements: mongoose
*
* @package
* @property
*
* @version 1.0.3
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const ClientSchema = new Schema({
    first_name: { type: String, required: [true, 'Why no first_name?'] },
    last_name: { type: String, required: false },
    nick_name: { type: String, required: false, description: "too known as... as trade marks, and other"},
    
    
    tax_type: { type: String, required: [true, 'Why no tax_type?'], enum:['personal','company','other']},
    tax_code: { type: String, requied: [true, 'Why no tax_code?'], unique: true },
    
    emails: [{
        email: {type: String, required: false},
        verified: { type: Boolean, required: false, default: false }
        
        
    },{ required: false}],
    
    addresses: [{
        contact: {type: String, required: false, description: "use if client is not your contact"},
        street: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        zip: { type: String, required: true }
        
        
    }, { required: false }],
    phones: [{
        phone_type: { type: String, required: false, enum: ['mobile', 'company', 'home', 'see memo', 'other']},
        prefix: { type: String, required: false},
        number: { type: String, required: [true, 'Why no phone.number?'] },
        subfix: { type: String, requied: false},
        memo: { type: String, required: false, description: "use if you need other data" }
    }, { required: false }],

    payment_cards: [{
        card_name: { type: String, requied: [true, 'Why no payment_cards.card_name?'], index: true, trim: true},
        card_number: { type: String, required: [true, 'Why no payment_cards.card_number?'], index: true, trim: true},
        expiry_date: { type: Date, requied: [true, 'Why no payment_cards.expiry_date?'], trim: true},
        zip: { type: String, trim: true, required: [true, 'Why no payment_cards.zip?']}    
    }, { required: false }],
    __q: { type: Number, required:  [true, 'Why no __q?']}
},{timestamps: true, autoIndex:true});


module.exports = mongoose.model('clients', ClientSchema);



/** this ends this file
* server/models/clients
**/
