import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import VehicleRegistration from '../views/VehicleRegistration.vue'
import PointsRegistration from '../views/PointsRegistration.vue'
import RouteRegistration from '../views/RouteRegistration.vue'
import Report from '../views/Report.vue'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  {
    path: '/VehicleRegistration',
    name: 'VehicleRegistration',
    component: VehicleRegistration
  },
  {
    path: '/PointsRegistration',
    name: 'PointsRegistration',
    component: PointsRegistration
  },
  {
    path: '/RouteRegistration',
    name: 'RouteRegistration',
    component: RouteRegistration
  },
  {
    path: '/Report',
    name: 'Report',
    component: Report
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
