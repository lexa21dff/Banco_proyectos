import Vue from 'vue'
import VueRouter from 'vue-router'
import RegistrarView from '@/views/Registrar.vue'
import LoginView from '@/views/Login.vue'
import InicioView from '@/views/Inicio.vue'
import ListaProyectoView from '@/views/ListaProyecto.vue'
import VerProyectoView from '@/views/VerProyecto.vue'
import CrearProyectoView from '@/views/CrearProyecto.vue'
import EntregaView from '@/views/Entrega.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/registrar',
    name: 'registrar',
    component: RegistrarView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/Inicio',
    name: 'Inicio',
    component: InicioView
  },
  {
    path: '/ListaProyecto',
    name: 'ListaProyecto',
    component: ListaProyectoView
  },
  {
    path:'/verProyecto/:id',
    name: 'verProyecto',
    component: VerProyectoView
  },
  {
    path:'/crearProyecto',
    name: 'crearProyecto',
    component: CrearProyectoView
  },
  {
    path:'/entrega',
    name: 'entrega',
    component: EntregaView
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
