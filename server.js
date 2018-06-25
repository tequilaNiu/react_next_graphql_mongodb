const next = require('next')
const routes = require('./routes')
const express = require('express')
const bodyParser = require('body-parser');
const { graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { User } = require('./connectors');
// var graphqlHTTP = require('express-graphql');
// var { buildSchema } = require('graphql');

const app = next({dev: process.env.NODE_ENV !== 'production'})
const handler = routes.getRequestHandler(app, ({req, res, route, query}) => {
  // 可以做点自己想做的事情
  app.render(req, res, route.page, query)
})

// var schema = buildSchema(`
//   type Query {
//     name: String,
//     age: String,
//   }
// `);

// var root = {
//   name: () => {
//     return 'Nolan';
//   },
//   age: () => {
//     return '29';
//   }
// }

const typeDefs = `
  type Query { user: User }
  type User { name: String, age: String }
`;

const resolvers = {
  Query: { user: () => User.findOne() }
}

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

const appp = express();

app.prepare().then(() => {
  // appp.post('/api/getUser', graphqlHTTP({
  //   schema: schema,
  //   rootValue: root,
  //   graphiql: false,
  // }))

  appp.use('/graphql', bodyParser.json(), graphqlExpress({ schema }))
  appp.use(handler).listen(3000)
})

// const express = require('express')
// const next = require('next')
// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare().then(() => {
//   const server = express()

//   // server.get('/p/:id', (req, res) => {
//   //   const actualPage = '/post'
//   //   const queryParams = {
//   //       title: req.params.id
//   //   }
//   //   app.render(req, res, actualPage, queryParams)
//   // })



//   // server.get('*', (req, res) => {
//   //   return handle(req, res)
//   // })

//   // server.get('/help/home', (req, res) => {
//   //   debugger;
//   //   const actualPage = '/home'
//   //   app.render(req, res, actualPage, queryParams)
//   // })

//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// }).catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })
