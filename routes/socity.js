const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/test',{ useNewUrlParser: true,useUnifiedTopology: true });

module.exports = function (fastify, options, done) {
  const demo = mongoose.model('demo',{name:'string'});  
  
    fastify.get('/', (request, reply) => {
      
      reply.send('added');
    });
    fastify.post('/add',async (request,reply)=>{
     
      const data = new demo(request.body);
      await data.save().then(() => console.log('meow'));   
      demo.find().then((docs,err)=> {
        console.log(docs);
        reply.send(docs);        
      });
    });
  done()
};