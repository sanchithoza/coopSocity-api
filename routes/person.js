require('../db/connection');
const Person = require('../models/person');

module.exports = function(fastify,option,done){
    fastify.post('/add',async(request,reply)=>{
        const data = new Person(request.body);

        await data.save().then(()=>{
            reply.send(data);
        }).catch((error)=>{
            reply.send(error);
        });
    });
    fastify.get('/',async(request,reply)=>{
        await Person.find().then((result)=>{
            reply.send(result);
        }).catch((error)=>{
            reply.send(error);
        });
    });
    done();
}