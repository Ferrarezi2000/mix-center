
export default [
  {path: '/', component: () => import('layouts/default'), children: [{path: '', component: () => import('pages/inicialLogado')}]},
  {path: '*', component: () => import('pages/404')}
]
