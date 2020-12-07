'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/io')(app)
  const { router, controller } = app;

  router.get('/', controller.test.index);
  router.get('/test/index', controller.test.index);
  router.get('/test/list', controller.test.list);
  router.get('/test/json', controller.test.json);
  router.get('/test/png', controller.test.png);

  
};
