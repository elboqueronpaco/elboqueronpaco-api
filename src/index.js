import { makeExecutableSchema, ApolloServer } from "apollo-server"
import models from '@models'
import { $server } from '@config'


const port = process.env.PORT || $server().port

// Type Definitions
const typeDefs = `
  type Hello {
    message: String!
  }
  type Query {
    sayHello(name: String!): Hello
  }   
`

//Resolvers
const resolvers = {
  Query: {
    sayHello: (_, args) =>{
      return {
        message: `Hello ${args.name} || 'world'`
      }
    }
  }
}

//Schema
const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

//Apollo Server
const apolloServer = new ApolloServer({
  schema
})

models.sequelize.sync({ force: true}).then(() => {
  //Running Apollo Server
  apolloServer.listen(port).then(({url})=> console.log(`Running on ${url}`))
})

