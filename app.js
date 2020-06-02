const fastify = require('fastify')();

fastify.register(require('fastify-cors'), { 
    origin: true
  })

//Route Plugins

fastify.register(require('./routes/socity'),{prefix:'/socity'});
fastify.register(require('./routes/person'),{prefix:'/person'});
fastify.register(require('./routes/building'),{prefix:'/building'});
fastify.register(require('./routes/flat'),{prefix:'/flat'});
fastify.register(require('./routes/maintenance'),{prefix:'/maintenance'});

module.exports = {
    fastify
}