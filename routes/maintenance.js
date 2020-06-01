require('../db/connection');
const Maintenance = require('../models/maintenance');

module.exports = function(fastify,option,done){
    fastify.post('/collect',(request,reply)=>{
        const data = new Maintenance(request.body);
        data.save().then(()=>{
            reply.status(200).send(data);
        }).catch((error)=>{
            reply.status(400).send(error);
        });
    });
    done();
}