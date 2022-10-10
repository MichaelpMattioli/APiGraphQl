const Post = {
    comentario(parent, args, ctx, info) {
        return ctx.db.comentarios.filter(comentario => comentario.post === parent.id)
    }, 
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(autor => autor.id === parent.autor)
    }
}

export default Post