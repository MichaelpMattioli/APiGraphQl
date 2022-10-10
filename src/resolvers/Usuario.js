const Usuario = {
    comentarios(parent, args, ctx, info) {
        return ctx.db.comentarios.filter(comentario => comentario.autor === parent.id)
    },
    posts(parent, args, ctx, info) {
        return ctx.db.posts.filter(post => post.autor === parent.id)
    },
    reacoes(parent, args, ctx, info) {
        return ctx.db.reacaos.filter(reacao => reacao.autor === parent.id)
    }
    
}
export default Usuario