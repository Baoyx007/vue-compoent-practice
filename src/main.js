/**
 * Created by aresn on 16/6/20.
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from 'components/app.vue';
import Index from './views/index.vue';
import Chart from './views/chart.vue';

Vue.use(VueRouter);

const router = new VueRouter({
        history: false
    }
);

router.map({
        '/index': {component: Index},
        '/bar': {component: Chart}
    }
);

router.beforeEach(function () {
        window.scrollTo(0, 0);
    }
);

router.redirect({
        '*': '/index'
    }
);

router.start(App, '#app');
