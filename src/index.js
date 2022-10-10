import db from "./db"
import { createServer } from '@graphql-yoga/node'
import Comentario from "./resolvers/Comentario"
import Post from "./resolvers/Post"
import Query from "./resolvers/Query"
import Reacao from "./resolvers/Reacao"
import Usuario from "./resolvers/Usuario"
import * as fs from 'fs'
import { v4 as uuidv4 } from 'uuid'
import Mutation from "./resolvers/Mutation"

const resolvers = {
    Query: Query,
    Post: Post,
    Usuario: Usuario,
    Mutation: Mutation,
    Comentario: Comentario,
    Reacao: Reacao
  }
  
  
  const server = createServer({
    schema: {
      typeDefs: fs.readFileSync('./src/schema.graphql', 'utf-8'), resolvers
    },
    context: {db: db}
  })
  
  server.start(() => console.log("Servidor executando..."))