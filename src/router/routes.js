
export default [
  {path: '/', component: () => import('layouts/default'), children: [{path: '', component: () => import('pages/InicialLogado')}]},
  {path: '/', component: () => import('layouts/default'), children: [{path: '/historico', component: () => import('pages/Historico')}]},
  {path: '*', component: () => import('src/404')}
]
