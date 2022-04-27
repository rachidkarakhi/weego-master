import { createWebHistory, createRouter } from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Activity from '@/views/activity/Activity.vue';

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
    },
    {
        path: '/activity',
        name: 'Activity',
        component: Activity,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;