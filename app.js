const fastify = require('fastify')();
fastify.register(require('fastify-mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
    forceClose: true,
    url: 'mongodb://mongo/mydbOne'
  });
//routes
fastify.register(require('./routes/socity'),{prefix:'/socity'});
fastify.get('/',(req,res)=>{
    res.send('hello');
});
module.exports = {
    fastify
}