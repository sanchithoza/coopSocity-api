const fastify = require('fastify')();
//fastify.register(require('fastify-mongodb'), {
    // force to close the mongodb connection when app stopped
    // the default value is false
  // forceClose: true,
   //url: 'mongodb://mongo/mydb'
 //});
//routes
fastify.register(require('./routes/socity'),{prefix:'/socity'});

module.exports = {
    fastify
}