
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/a2-simulator/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/a2-simulator/home",
    "route": "/a2-simulator"
  },
  {
    "renderMode": 2,
    "route": "/a2-simulator/home"
  },
  {
    "renderMode": 2,
    "route": "/a2-simulator/questions"
  },
  {
    "renderMode": 2,
    "route": "/a2-simulator/learning"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 2619, hash: '907edaaa924015176d63927f6bfd2a81f0f44b854d1391f96699d6518dde71da', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1405, hash: 'f1d42f0acddc25c9aeff0b482956b8e0a9673536c9f95a17db27470a2e727c10', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'questions/index.html': {size: 15708, hash: '90ac2ecc498f4c69fa5a341d42dfb9b2c87855b1aeb35002862665d478bcca0c', text: () => import('./assets-chunks/questions_index_html.mjs').then(m => m.default)},
    'home/index.html': {size: 13107, hash: '4ba4ffa8c89e98a7c2e79a1c2548c5bff2b1b349ef4f07f22ca3da750bf9b409', text: () => import('./assets-chunks/home_index_html.mjs').then(m => m.default)},
    'learning/index.html': {size: 13788, hash: 'a4b8f41ce3acb50a7f798eb42222a57628d89dc7585e6077b321ce1d870af69c', text: () => import('./assets-chunks/learning_index_html.mjs').then(m => m.default)},
    'styles-YXQFWRVK.css': {size: 149599, hash: 'argDDwaZX9M', text: () => import('./assets-chunks/styles-YXQFWRVK_css.mjs').then(m => m.default)}
  },
};
