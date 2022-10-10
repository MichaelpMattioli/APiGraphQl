const usuarios = [
{
    id: '1',
    nome: 'Adao',
    idade: 22
},
{
    id: '2',
    nome: 'Rafael',
    idade: 25
},
{
    id: '3',
    nome: 'Cidao',
    idade: 44
},
{
    id: '4',
    nome: 'Renato',
    idade: 32
}
]
const posts = [
{
    id: '101',
    texto: 'Muito sonoooooooo :)',
    autor: '1'
},
{
    id: '102',
    texto: 'Me sentindo bemmm',
    autor: '1'
},
{
    id: '103',
    texto: 'Ola a todos',
    autor: '2'
},
]
const comentarios = [
    {
        id: '1001',
        texto: 'Tambem estou',
        autor: '3',
        post: '101'
    },
    {
        id: '1002',
        texto: 'Nossa estou muito empolgado',
        autor: '2',
        post: '101'
    },
    {
        id: '1003',
        texto: 'Espera agora tambem bateu um sono',
        autor: '2',
        post: '101'
    },
    {
        id: '1004',
        texto: 'Bom dia',
        autor: '1',
        post: '103'
    },
]
const reacaos = [
    {
        id: '10001',
        tipo: 'gostei',
        post: '101',
        autor: '2'
    },
    {
        id: '10002',
        tipo: 'não gostei',
        post: '101',
        autor: '3'
    },
    {
        id: '10003',
        tipo: 'não gostei',
        post: '101',
        autor: '4'
    },

]

export default {
    usuarios, posts, comentarios, reacaos
}
