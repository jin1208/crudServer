//routes/index.js
const router = require('express').Router();
const controller = require('./controller');

router.get('/list', controller.customerList);

router.delete('/list/:id', controller.delete);

router.put('/list/:id', controller.update);

router.get('/list/:search', controller.searchList);


module.exports = router;