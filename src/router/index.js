import Vue from 'vue'
import VueRouter from 'vue-router'
import Form from '../views/Form.vue'
import Template from '../views/Template.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Form',
    component: Form
  },
  {
    path: '/template',
    name: 'Template',
    component: Template
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
