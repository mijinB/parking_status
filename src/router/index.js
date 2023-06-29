import { createRouter, createWebHistory } from 'vue-router';

const routes = [    
    {
        path: '/',
        name: 'home',
        component: () => import('@/views/test.vue')
    },    
    {
        // 없는 path 접근시 보여줄 페이지 정의
        path: "/:catchAll(.*)",
        //path: '/:pathMatch(.*)*',
        name: 'not found',
        component: () => import('@/views/NotFoundPageView.vue')
        //redirect: '/'
    }  
];

  
export const router = createRouter({
  history: createWebHistory(),
  routes,
})

