import { v4 as uuidv4 } from 'uuid'

const Mutation = {
    inputUser(parent, args, ctx, info) {
        const usuario = {
            id: uuidv4(),
            nome: args.usuario.nome,
            idade: args.usuario.idade
        }
        ctx.db.usuarios.push(usuario)
        return usuario
    },
    inputPost(parent, args, ctx, info) {
        const userExust = ctx.db.usuarios.some(p => p.id === args.autor)
        if (!userExust)
            throw new Error("Usuario não existe")
        const post = {
            id: uuidv4(),
            texto: args.post.texto,
            autor: args.post.autor
        }
        ctx.db.usuarios.post.push(post)
        ctx.db.posts.push(post)
        return post
    },
    inputComentario(parent, args, ctx, info) {
        const postExist = ctx.db.comentarios.some(p => p.id === args.post)
        if (!postExist)
            throw new Error("Post não existe")
        const comentario = {
            id: uuidv4(),
            texto: args.comentario.text,
            autor: args.comentario.autor,
            post: args.comentario.post
        }
        ctx.db.comentarios.push(comentario)
        ctx.db.usuarios.comentario.push(comentario)
        ctx.db.post.comentario.push(comentario)
        return comentario
    },
    inputReacao(parent, args, ctx, info) {
        const postExist = ctx.db.comentarios.some(p => p.id === args.post)
        if (!postExist)
            throw new Error("Post não existe")
        const reacao =  {
            id: uuidv4(),
            tipo: args.reacao.tipo,
            post: args.reacao.post,
            autor: args.reacao.autor
        }
        ctx.db.reacaos.push(reacao)
        ctx.db.usuarios.recao.push(reacao)
        ctx.db.post.recao.push(reacao)
    }
}

export default Mutation