import Vue from 'vue'
import Router from 'vue-router'
import * as Enum from '@/const/Enum'

Vue.use(Router)

function loadView (view) {
    return () => import(/* webpackChunkName: "view-[request]" */ `@/components/${view}/${view}.vue`)
}

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: Enum.MenuEnum.Board.viewNameLowercase,
      component: loadView(Enum.MenuEnum.Board.viewName)
    },
    {
      path: Enum.MenuEnum.Plan.path,
      name: Enum.MenuEnum.Plan.viewNameLowercase,
      component: loadView(Enum.MenuEnum.Plan.viewName)
    },
    {
        path: Enum.MenuEnum.Board.path,
        name: Enum.MenuEnum.Board.viewNameLowercase,
        component: loadView(Enum.MenuEnum.Board.viewName)
    },
    {
      path: Enum.MenuEnum.Assessment.path,
      name: Enum.MenuEnum.Assessment.viewNameLowercase,
      component: loadView(Enum.MenuEnum.Assessment.viewName)
    },
    {
      path: Enum.MenuEnum.Maintenance.path,
      name: Enum.MenuEnum.Maintenance.viewNameLowercase,
      component: loadView(Enum.MenuEnum.Maintenance.viewName)
    }
  ]
})