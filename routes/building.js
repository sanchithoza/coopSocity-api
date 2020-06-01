require('../db/connection');
const Building = require('../models/building');

module.exports = function(fastify,option,done){
    fastify.post('/add',(request,reply)=>{
        const data = new Building(request.body);

        data.save().then(()=>{
            reply.status(200).send(data)
        }).catch((error)=>{
            reply.status(400).send(error)
        });
    });
    fastify.get('/',(request,reply)=>{
        Building.find().then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    })
    done();
}