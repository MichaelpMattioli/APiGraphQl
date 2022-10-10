const Query = {
    usuarios(parent, args, ctx, info) {
        return ctx.db.usuarios
    },
    reacoes(parent, args, ctx, info) {
        const r = ctx.db.reacaos         
        const total = ctx.db.reacaos.length                
        var soma = 0         
        for (var i = 0; i < r.length; i++) {           
            soma += r[i].tipo === 'gostei' ? 1 : 0         
        }
        var porcentagens = `Gostei = ${((soma /  total) * 100).toFixed(2)}\%, Nao gostei == ${100 - ((soma /  total) * 100).toFixed(2)}\%`
        console.log(porcentagens)
        return porcentagens
    },
    comentarios(parent, args, ctx, info) {
        return ctx.db.comentarios
    },
    posts(parent, args, ctx, info) {
        return ctx.db.posts
    }
}

export default Query