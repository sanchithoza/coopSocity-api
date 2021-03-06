
const fastify = require('fastify')();

fastify.register(require('fastify-cors'), {
  origin: true
});
fastify.register(require('fastify-jwt'), {
  secret: 'coopSocity'
})
fastify.register(require('./plugins/authenticate'),{

});

//Route Plugins
fastify.register(require('./routes/user'), { prefix: '/user' });
fastify.register(require('./routes/socity'), { prefix: '/socity' });
fastify.register(require('./routes/person'), { prefix: '/person' });
fastify.register(require('./routes/building'), { prefix: '/building' });
fastify.register(require('./routes/flat'), { prefix: '/flat' });
fastify.register(require('./routes/account'), { prefix: '/account' });

module.exports = {
  fastify
}