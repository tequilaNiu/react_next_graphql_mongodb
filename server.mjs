// const next = require('next')
// const routes = require('./routes')
// const express = require('express')
// const bodyParser = require('body-parser');
// const { graphqlExpress } = require('apollo-server-express');
// const { makeExecutableSchema } = require('graphql-tools');
// const { User } = require('./connectors');
import next from 'next';
import routes from './routes';
import express from 'express';
import bodyParser from 'body-parser';
import apollo from 'apollo-server-express';
import graphql from 'graphql-tools';
import { SqlUser, MongoAccount } from './connectors.mjs';
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
  type Query { user(id: Int): User, account(id: Int): Account }
  type User { name: String, age: String, id: Int }
  type Account { email: String, password: String, id: Int }
`;

const resolvers = {
  Query: { 
    user: (_, args) => SqlUser.findOne({where: args}),
    account: (_, args) => MongoAccount.findOne(args),
  }
}

const schema = graphql.makeExecutableSchema({
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

  appp.use('/graphql', bodyParser.json(), apollo.graphqlExpress({ schema }))
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
