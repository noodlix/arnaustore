import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView'
import store from '@/store/store';
// import AboutView from '@/views/AboutView' //@ отвечает за папку src
import Login from '../views/Login'
import Profile from '../views/Profile'
import Product from '../views/Product'
import Cart from '../views/Cart'
import Order from '../views/Order'
import CreateProduct from '../views/CreateProduct'
const routes = [
  // {
  //   path: '/:pathMach(.*)*',
  //   redirect: '/login'
  // },


  {
    path: '/home',
    name: 'home',
    component: HomeView,
    meta: {
    pageTitle: 'HomePage | arnau'
    },
    beforeEnter: (to, from, next) => {
      if (store.state.loggedInUser !== null) {
        next(); 
      } else {
        next('/login');
      }
    }
  },
  {
    path: '/profile',
    name: 'profile',
    component: Profile,
    meta: {
    pageTitle: 'ProfilePage | arnau'
    }
  },
  {
    path: '/',
    name: 'login',
    component: Login,
    meta: {
      page_title: 'entrance | arnau'
    }
  },
  {
    path: '/product/:id',
    name: 'product',
    component: Product,
    meta: {
      page_title: 'oneproduct | arnau'
    },
    props: true
  },
  {
    path: '/cart',
    name: 'cart',
    component: Cart,
    meta: {
      page_title: 'cart | arnau'
    }
  },
  {
    path: '/order',
    name: 'order',
    component: Order,
    meta: {
      page_title: 'order | arnau'
    }
  },
  {
    path: '/createproduct',
    name: 'createproduct',
    component: CreateProduct,
    meta: {
      page_title: 'create product | arnau'
    }
  }

  // {
  //   path: '/profile:id',  //: это значит динамическое
  //   name: 'profile',
  //   component: Profile,
  //   meta: {
  //   pageTitle: 'ProfilePage | arnau'
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// router.beforeEach(async (to, from) => {
//   if (
//     // make sure the user is authenticated
//     !store.getters.isUserLoggedIn &&
//     // ❗ Avoid an infinite redirect
//     to.name !== 'login'
//   ) {
//     // redirect the user to the login page
//     return { name: 'login' }
//   }``
// })

export default router
