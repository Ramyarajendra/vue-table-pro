import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../components/HomePage'
import NewPage from '../components/NewPage'

Vue.use(Router)

const router=new Router({
    routes: [
        {
            path: '/HomePage',
            name:'HomePage',
            component: HomePage,
        },
        {
            path: '/NewPage',
            name:'NewPage',
            component: NewPage,
        }
    ]
})
export default router;
