// Require the framework and instantiate it
const fastify = require('fastify')({ logger: true })

// Allow an external process to change the PORT number without changing code
const PORT = process.env.PORT || 8000

//Enable cors
fastify.register(require('fastify-cors'), { 
  origin:true,
  methods:["GET"]
})

// Declare a staff route on the API. 
// Normally would make a call to a database but here I just stub it.
fastify.get('/staff', (request, reply) => {
  reply.send([
      {
          "name":"Jon Snow",
          "age":31,
          "height":"5ft 11in",
          "weight":70
      },{
        "name":"Ned Stark",
        "age":31,
        "height":"5ft 10in",
        "weight":74
    },{
        "name":"Ghost",
        "age":10,
        "height":"4ft 3in",
        "weight":90
    }
  ])
})

// Run the server!
const start = async () => {
  try {
    await fastify.listen(PORT)
    fastify.log.info(`Server listening on ${fastify.server.address().port}`)
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()