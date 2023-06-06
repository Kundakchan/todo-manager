import { type RouteRecordRaw } from 'vue-router'

// Layouts
const LayoutDefault = () => import('@/layout/Default.vue')
const LayoutAuthorization = () => import('@/layout/Authorization.vue')
const LayoutError = () => import('@/layout/Error.vue')
// Pages
const PageHome = () => import('@/pages/Home.vue')
const PageAbout = () => import('@/pages/About.vue')
const PageLogin = () => import('@/pages/Login.vue')
const PageRegistration = () => import('@/pages/Registration.vue')
const PageNotFond = () => import('@/pages/NotFond.vue')
const PageForbidden = () => import('@/pages/Forbidden.vue')

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: LayoutDefault,
    children: [
      {
        path: '',
        alias: 'home',
        name: 'Home',
        component: PageHome
      },
      {
        path: 'about',
        name: 'About',
        component: PageAbout
      }
    ]
  },
  {
    path: '/authorization',
    component: LayoutAuthorization,
    children: [
      {
        path: 'registration',
        name: 'Registration',
        component: PageRegistration
      },
      {
        path: '',
        alias: 'login',
        name: 'Login',
        component: PageLogin
      }
    ]
  },
  {
    path: '/error',
    component: LayoutError,
    children: [
      {
        path: '',
        alias: 'not-found',
        name: 'NotFound',
        component: PageNotFond
      },
      {
        path: 'forbidden',
        name: 'Forbidden',
        component: PageForbidden
      }
    ]
  },
  {
    path: '/:catchAll(.*)',
    redirect: { name: 'NotFound' }
  }
]

export default routes