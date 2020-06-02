require('../db/connection');
const Socity = require('../models/socity');


module.exports = function (fastify, options, done) {
  fastify.get('/', (request, reply) => {
    Socity.find().then((docs) => {
      reply.send(docs);
    }).catch((error)=>{
      reply.send(error);
    })
  });
  fastify.post('/add', async (request, reply) => {
    console.log(request.body);
    
    const data = new Socity(request.body);
    await data.save().then(() => {
      reply.status(200).send(data);
    }).catch((error) => {
      reply.status(400).send(error);
    })
  });
  fastify.post('/find',(request,reply)=>{
    Socity.find(request.body).then((docs)=>{
        reply.status(200).send(docs);
    }).catch((error)=>{
        reply.status(400).send(error);
    })
})
  /*fastify.delete('/:name', async (request, reply) => {
    const query = request.params;

    demo.deleteOne(query).then((docs, err) => {
      console.log('deleted', docs);

    });
  });
  fastify.patch('/update',async (request,reply)=>{
    await demo.findOneAndUpdate({name:'oza'})
  });*/
  done()
};