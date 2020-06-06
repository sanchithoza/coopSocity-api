const fp = require("fastify-plugin")

module.exports = fp(async function(fastify, opts) {
 /* fastify.register(require("fastify-jwt"), {
    secret: "supersecret"
  })*/

  fastify.decorate("authenticate", async function(request, reply) {
    try {
        console.log("in plugin");
      await request.jwtVerify()
    } catch (err) {
      reply.send(err)
    }
  })
})