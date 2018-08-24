/**
* Name: supplers
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/models/supplers
*
* Created:  24 Aug 2018
*
*
* Description: Data model for suppliers
*
* Requirements: mongoose
*
* @package
* @property
*
* @version 1.0
*/

const mongoose = require('mongoose');
const { Schema } = mongoose;

const SuppliersSchema = Schema({
    first_name: { type: String, required: [true, 'Why no first_name?'] },
    last_name: { type: String, required: false },
    nick_name: { type: String, required: false, description: "too known as... as trade marks, and other" },


    tax_type: { type: String, required: [true, 'Why no tax_type?'], enum: ['personal', 'company', 'other'] },
    tax_code: { type: String, requied: [true, 'Why no tax_code?'], unique: true },

    emails: [{
        email: { type: String, required: false },
        verified: { type: Boolean, required: false, default: false }


    }, { required: false }],

    addresses: [{
        contact: { type: String, required: false, description: "use if client is not your contact" },
        street: { type: String, required: true },
        city: { type: String, required: true },
        province: { type: String, required: true },
        zip: { type: String, required: true }


    }, { required: false }],
    phones: [{
        phone_type: { type: String, required: false, enum: ['mobile', 'company', 'home', 'see memo', 'other'] },
        prefix: { type: String, required: false },
        number: { type: String, required: [true, 'Why no phone.number?'] },
        subfix: { type: String, requied: false },
        memo: { type: String, required: false, description: "use if you need other data" }
    }, { required: false }],

    bank_accounts: [{
        account: { type: String, minlenght: 24, maxlenght: 23, requied: [true, 'Why no bank_accounts.account?'], unique: true, trim: true }, 
        bank_address: { type: string, requied: false, trim: true },
        bank_city: { type: string, requied: false, trim: true },
        bank_province: { type: string, requied: false, trim: true },
        bank_zip: { type: string, required: false, trim: true},
    },{ required: false }],

    payments: [{
        date: { type: Date, required: [true, 'Why no payments.date?']},
        description: { type: String, requied: [true, 'Why no payments.description??'] },
        debit: { type: Number, requied: [true, 'Why no payments.debit??']},
        credit: { type: Number, requied: [true, 'Why no payments.credit??']}
    },{requied: false}],

    memos: [{
        memo: { type: string, requied: true },
        date: { type: Date, requied:true}
    },{ requied: false }],

    __q: { type: Number, required: [true, 'Why no __q?'] }
}, { timestamps: true, autoIndex: true });

module.exports = mongoose.model('suppliers', SuppliersSchema);

/** this ends this file
* server/models/supplers
**/
