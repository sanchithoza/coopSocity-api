require('../db/connection');
const Flat = require('../models/flat')

module.exports = function(fastify,option,done){
    fastify.post('/add',(request,reply)=>{
        const data = new Flat(request.body);

        data.save().then(()=>{
            reply.status(200).send(data)
        }).catch((error)=>{
            reply.status(400).send(error)
        });
    });
    fastify.get('/',(request,reply)=>{
        Flat.find().then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    })
    done();
}