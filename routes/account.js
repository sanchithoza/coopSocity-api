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
    done();
}