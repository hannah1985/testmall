//配置路由相关信息
import Vue from 'vue'
import Router from 'vue-router'

const Home =()=> import('views/home/Home')
const Category =()=>import('views/category/Category')
const ShopCart =()=> import('views/shopcart/ShopCart')
const Profile =()=>import('views/profile/Profile')

//1. 通过Vue.use(插件)注入插件
Vue.use(Router)

//2. 定义路由映射
const routes = [
    {
        path: '',
        redirect:'/home'
      },
      {
        path:'/home',
        component:Home
      },
      {
        path:'/category',
        component:Category
      },
      {
        path:'/shopcart',
        component:ShopCart
      },
      {
        path:'/profile',
        component:Profile
      }
]

//3. 创建router实例
const router = new Router({
    //配置路由和组件之间的映射关系
    routes,
    mode:'history'
})

//4. 导出router实例，将router对象传入到Vue实例
export default router