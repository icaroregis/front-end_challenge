import Vue from 'vue';
import VueRouter from 'vue-router';
import UserList from '../views/UserList.vue';
import EditUser from '../views/EditUser.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'UserList',
    component: UserList,
  },
  {
    path: '/create',
    name: 'EditUser',
    component: EditUser,
  },
  {
    path: '/create/:email',
    name: 'EditUser',
    component: EditUser,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
