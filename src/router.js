import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/Welcome.vue'
import Login from './views/Login.vue'
import Add_okr from './views/Add_okr.vue'
import Mine_okr from './views/Mine_okr.vue'
import Today_todos from './views/Today_todos.vue'
import History_todo from './views/History_todo.vue'
import Notreflection from './views/Notreflection.vue'
import Reflection from './views/Reflection.vue'
import Complete_todos from './views/Complete_todos.vue'
import View_okr from './views/View_okr.vue'
import Edit_okr from './views/Edit_okr.vue'
import Edit_todo from './views/Edit_todo.vue'

Vue.use(Router)

const appRouter = new Router({
  routes: [
      {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/addokr',
      name: 'addokr',
      component: Add_okr
    },
    {
      path:'/mineokr',
      name:'mineokr',
      component:Mine_okr
    },
    {
      path:'/todaytodos',
      name:'todaytodos',
      component:Today_todos
    },{
      path:'/historytodo',
      name:'historytodo',
      component:History_todo
    },
    {
      path:'/notreflection/:id',
      name:'notreflection',
      component:Notreflection
    },
    {
      path:'/reflection/:id',
      name:'reflection',
      component:Reflection
    },
    {
      path:'/completetodos',
      name:'completetodos',
      component:Complete_todos
    },
    {
      path:'/viewokr/:id',
      name:'viewokr',
      component:View_okr
    },
    {
      path:'/editokr/:id',
      name:'editokr',
      component:Edit_okr
    },
    {
      path:'/edittodo/:id',
      name:'edittodo',
      component:Edit_todo
    }
  ]
});

appRouter.beforeEach((to, from, next) => {
  let name = to.name;
  let shouldLoginPage = ['addokr','mineokr','viewokr','editokr',
    'todaytodos','notreflection','todaytodos','reflection','historytodo'];
  let shouldLogin = shouldLoginPage.some(data => data === name );
  let isLogin = localStorage.getItem('tokens')
  if(shouldLogin && !isLogin){
    next('/login');
    return
  }
  if(isLogin && name === 'login'){
    next('/addokr')
    return
  }
  next()
})

export default appRouter;
