import router from './router';

import dva from 'dva';

import './global.scss';
import '@/assets/fonts/blinker-v1-latin/blinker-v1-latin.css';
import '@/assets/fonts/foundation-icons/foundation-icons.css';
import projectModel from '@/models/project';
import modalModel from '@/models/modal';
import pageModel from '@/models/page';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
app.model(pageModel);
app.model(modalModel);
app.model(projectModel);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');