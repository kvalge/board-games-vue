import {createRouter, createWebHashHistory} from 'vue-router';

import GamesList from '@/pages/games/GamesList.vue';
import AddNewGame from '@/pages/new/AddNewGame.vue';
import NotFound from '@/pages/NotFound';

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', redirect: '/games'},
        {path: '/games', component: GamesList},
        {path: '/new', component: AddNewGame},
        {path: '/:notFound(.*)', component: NotFound},
    ]
})

export default router
