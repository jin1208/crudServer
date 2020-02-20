//routes/index.js
const router = require('express').Router();
const controller = require('./controller');

router.get('/', controller.testConnDB);

router.get('/main', controller.mainView);

router.get('/customer', controller.selectCustomer);

module.exports = router;