const mongoose = require('mongoose');
require('../db/connection');
const Person = require('../models/person');

module.exports = function(fastify,option,done){
    fastify.post('/add',async(request,reply)=>{
        request.body.socity = mongoose.Types.ObjectId(request.body.socity);
        request.body.building = mongoose.Types.ObjectId(request.body.building);
        request.body.flat = mongoose.Types.ObjectId(request.body.flat);
        const data = new Person(request.body);

        await data.save().then(()=>{
            reply.send(data);
        }).catch((error)=>{
            reply.send(error);
        });
    });
    fastify.get('/',async(request,reply)=>{
        await Person.find().populate('socity','name').populate('building','name').populate('flat','name').then((result)=>{
            reply.send(result);
        }).catch((error)=>{
            reply.send(error);
        });
    });
    fastify.post('/find',(request,reply)=>{
        Person.find(request.body).then((docs)=>{
            reply.status(200).send(docs);
        }).catch((error)=>{
            reply.status(400).send(error);
        })
    })
    done();
}