
export default [
  {path: '/', component: () => import('layouts/default'), children: [{path: '', component: () => import('pages/InicialLogado')}]},
  {path: '/', component: () => import('layouts/default'), children: [{path: '/historico', component: () => import('pages/Historico')}]},
  {path: '/', component: () => import('layouts/default'), children: [{path: '/categoria', component: () => import('pages/compra/Categorias')}]},
  {path: '/', component: () => import('layouts/default'), children: [{path: '/subCategoria', component: () => import('pages/compra/SubCategorias')}]},
  {path: '/', component: () => import('layouts/default'), children: [{path: '/subCategoriaFinal', component: () => import('pages/compra/SubCategoriasFinal')}]},
  {path: '/', component: () => import('layouts/default'), children: [{path: '/carrinho', component: () => import('pages/compra/CarrinhoCompra')}]},
  {path: '*', component: () => import('src/404')}
]
