import { createRouter, createWebHistory } from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Report from '../views/Report.vue'
import VehicleRegistration from '../views/Vehicles/VehicleRegistration.vue'
import VehiclesVisualization from '../views/Vehicles/VehiclesVisualization.vue'
import PointRegistration from '../views/Points/PointRegistration.vue'
import PointsVisualization from '../views/Points/PointsVisualization.vue'
import RouteRegistration from '../views/Routes/RouteRegistration.vue'
import RoutesVisualization from '../views/Routes/RoutesVisualization.vue'

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
    path: '/Report',
    name: 'Report',
    component: Report
  },
  {
    path: '/VehiclesVisualization',
    name: 'VehiclesVisualization',
    component: VehiclesVisualization
  },
  {
    path: '/VehicleRegistration',
    name: 'VehicleRegistration',
    component: VehicleRegistration
  },
  {
    path: '/PointsVisualization',
    name: 'PointsVisualization',
    component: PointsVisualization
  },
  {
    path: '/PointRegistration',
    name: 'PointRegistration',
    component: PointRegistration
  },
  {
    path: '/RoutesVisualization',
    name: 'RoutesVisualization',
    component: RoutesVisualization
  },
  {
    path: '/RouteRegistration',
    name: 'RouteRegistration',
    component: RouteRegistration
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
