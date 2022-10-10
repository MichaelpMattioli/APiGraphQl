const Comentario = {
    post(parent, args, ctx, info) {
        return ctx.db.posts.find(post => post.id === parent.post)
    },
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(autor => autor.id === parent.autor)
    }
}

export default Comentario