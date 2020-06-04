const mongoose = require('mongoose');
require('../db/connection');
const Building = require('../models/building');

module.exports = function(fastify,option,done){
    fastify.post('/add',(request,reply)=>{
        request.body.socity = mongoose.Types.ObjectId(request.body.socity);
      //  console.log(request.body);
        
        const data = new Building(request.body);

        data.save().then(()=>{
            reply.status(200).send(data)
        }).catch((error)=>{
            reply.status(400).send(error)
        });
    });
    fastify.get('/',(request,reply)=>{
        Building.find().populate('socity','name').then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    });
    fastify.post('/find',(request,reply)=>{
        Building.find(request.body).then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    })
    done();
}