/**
* Name: clients.controller
*
* @author Pedro Ruiz Hidalgo
*		  correo@pedroruizhidalgo.es
*         @pedroruizhidalg
*
*		  Coding the world since 1983!
*
* Location: server/controllers/clients.controller
*
* Created:  21 Aug 2018
*
*
* Description: controller for clients
*
* Requirements: clients model in '../models/clients'
*
* @package
* @property
*
* @version 1.0
*/

const clientsController = {};
const Clients = require('../models/clients');

const Error = {
    'package' : 'izanagi',
    'controller' : 'clients',
    'error' : ''
};

const Ok = {
    'status': '200',
    'response': 'Ok'
};

clientsController.getClients = async (req, res) => {

    
    try {

        Clients.updateMany( 
            {}, 
            { $inc: { __q: 1 } }           
        )
            .catch( (err) => {
                console.log(err);
            });
    } catch (e) {
        console.log(e);
    }
    

    const data = await Clients.find();

    res.json(data);
};

clientsController.createClient = async (req, res) => {

    const client = new Clients(req.body);

    await client.save( (err) => {
        if (err) {
            Error.error = err;
            res.status('415').json(err);
        }
        else {
            res.json(Ok);
        }
    })

};

clientsController.getClient = async (req, res) => {
    
    const id = req.params.id;
    
    await Clients.findById(id)
        .then( response => {
            response.__q++;
            Clients.findByIdAndUpdate(id, response);

            res.json(response)
        })
        .catch( err => {
            Error.code = '404';
            Error.error = err;
            res.status('404');
            res.json(Error);
        });
 
};

clientsController.putClient = async (req, res) => {

    const id = req.params.id;
    const data = req.body;
    
    data.__v++;
    delete data._id;

    await Clients.findOneAndUpdate({_id: id}, data)
        .then( () => {
            res.json(Ok);
        }
        ).catch(err => {
            Error.code = '';
            Error.error = err;
            res.json(Error);
        })

};

clientsController.deleteClient = async (req, res) => {

    const id = req.params.id;

    await Clients.findByIdAndRemove(id)
        .then ( () => {
            res.json(Ok);
        }).catch ( err => {
            Error.code = '';
            Error.error = err;
            res.json(Error);
        });

}


module.exports = clientsController;
/** this ends this file
* server/controllers/clients.controller
**/
