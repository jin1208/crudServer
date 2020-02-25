//routes/controller.js
var models = require('../models');

//exports.내보낼이름
exports.mainView = (req,res) => {
    res.send('Hello World!!');
};

exports.testConnDB = (req,res) => {
    // 복수의 요소 검색
    models.user.findAll().then(result => {
    // result는 모든 Project 모델의 항목들을 배열로 받아온다
    res.json(result);
    })
    .catch(err => {
        console.error(err);
    })
};

exports.selectCustomer = (req,res) => {
    // 복수의 요소 검색
    models.customer.findAll().then(result => {
    // result는 모든 Project 모델의 항목들을 배열로 받아온다
    res.json(result);
    })
    .catch(err => {
        console.error(err);
    })
};
