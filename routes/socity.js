module.exports = function (fastify, options, done) {
    fastify.get('/', (request, reply) => {
      reply.send({ hello: 'world' })
    })
  done()
};