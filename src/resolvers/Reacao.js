const Reacao = {
    autor(parent, args, ctx, info) {
        return ctx.db.usuarios.find(autor => autor.id === parent.autor)
    },
    post(parent, args, ctx, info) {
        return ctx.db.posts.find(post => post.id === parent.autor)
    },
}
export default Reacao