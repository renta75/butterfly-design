import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/services',
    name: 'Services',
    component: () => import(/* webpackChunkName: "services" */ '../views/Services.vue')
  },
  {
    path: '/services/web-development',
    name: 'Web Development',
    component: () => import(/* webpackChunkName: "webdev" */ '../views/WebDevelopmentPage.vue')
  },
  {
    path: '/services/e-commerce',
    name: 'E-Commerce',
    component: () => import(/* webpackChunkName: "ecom" */ '../views/ECommercePage.vue')
  },
  {
    path: '/services/maintenance',
    name: 'Maintenance',
    component: () => import(/* webpackChunkName: "maintenance" */ '../views/MaintenancePage.vue')
  },
  {
    path: '/services/graphic-design',
    name: 'Graphic Design',
    component: () => import(/* webpackChunkName: "graphdes" */ '../views/GraphicDesignPage.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to) {
    if (to.hash) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            selector: to.hash,
            behavior: 'smooth',
            offset: { x: 0, y: 100 }
          });
        }, 500);
      });
    }
    return { x: 0, y: 0 };
  },
  routes
})

export default router
