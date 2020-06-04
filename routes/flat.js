const mongoose = require('mongoose');
require('../db/connection');
const Flat = require('../models/flat')

module.exports = function(fastify,option,done){
    fastify.post('/add',(request,reply)=>{
        request.body.socity = mongoose.Types.ObjectId(request.body.socity);
        request.body.building =  mongoose.Types.ObjectId(request.body.building);
        const data = new Flat(request.body);
        data.save().then(()=>{
            reply.status(200).send(data)
        }).catch((error)=>{
            reply.status(400).send(error)
        });
    });
    fastify.get('/',(request,reply)=>{
        Flat.find().populate('socity','name').populate('building','name').then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    })
    fastify.post('/find',(request,reply)=>{
        Flat.find(request.body).then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    })
    done();
}