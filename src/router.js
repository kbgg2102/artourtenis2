import { createRouter, createWebHistory } from 'vue-router';

import Login from './pages/Login.vue';
import SignUp from './pages/SignUp.vue';
import SignUpProfile from './pages/SignUpProfile.vue';

const routes = [
    { path: '/', component: Login },
    { path: '/login', component: Login },
    { path: '/signup', component: SignUp },
    { path: '/signup_profile', component: SignUpProfile },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
