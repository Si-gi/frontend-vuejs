import { createRouter, createWebHashHistory } from 'vue-router'
import {CategoryView, NotFound, PublicLayout, ProductCategorie, ArticleView} from '@/views/public/'
import LoginView from '@/views/auth/LoginView.vue'
import { authGuard } from '@/_helpers/auth-guard.js'
import * as admin from '@/views/admin/'
import { accountService }  from '@/_services'


const routes = [
  {
    path: '/',
    name: 'layout',
    component: PublicLayout,
    children: [
      { path: '/category', name: 'categoryList', component: CategoryView },
      { path: '/category/:id', name: 'categoryDetail', component: ProductCategorie, props: true },
      { path: '/product', name: 'product', component: CategoryView },
      { path: '/product/:id', name: 'articleList', component: ArticleView, props: true },
      { path: '/:pathMatch(.*)*', name : 'notfound', component: NotFound},
    ]

  },
  {
    path: '/admin',
    name: 'admin',
    component: admin.AdminLayout,
    children: [
      {path: '/dashboard', name: 'dashboard', component: admin.DashboardView},
      {path: '/user', name: 'user', component: admin.UserIndex},
      {path: '/admin/category', name: 'categoryIndex', component: admin.CategoryIndex},
      {path: '/admin/categoryadd', name: 'CategoryAdd', component: admin.CategoryAdd},
      {path: '/admin/category/edit/:id', name: 'CategoryEdit', component: admin.CategoryEdit, props: true},
      {path: '/admin/category/:id/products/', name: 'ProductsCategory', component: admin.ProductsCategory, props: true},
      {path: '/admin/category/:id_category/product/add', name: 'ProductAdd', component: admin.ProductAdd, props: true},


    ]
  },
  {
    path: '/login',
    name:'login',
    component: LoginView,
  },
  {
    path: '/logout',
    name: 'logout',
    beforeEnter : () => {
      accountService.logout()
      router.push('/login')
    }
  }
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  if(to.matched[0].name.includes('admin')){
    authGuard()
  }
  next()
})


export default router

