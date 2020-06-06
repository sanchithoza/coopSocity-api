require('../db/connection');
const Account = require('../models/account');

module.exports = function (fastify, option, done) {
    fastify.post('/maintenance', (request, reply) => {

        const data = new Account(request.body);
        data.save().then(() => {
            reply.status(200).send(data);
        }).catch((error) => {
            reply.status(400).send(error);
        });
    });
    fastify.post('/getMaintenanceDetails',(request,reply)=>{
        Account.find(request.body).populate('person','name').then((result)=>{
            reply.status(200).send(result);
        }).catch((error)=>{
            reply.status(400).send(error);
        });
    });
    done();
}