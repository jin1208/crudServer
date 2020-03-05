const router = require('express').Router();
const multer = require("multer");
var models = require('../models');


let storage = multer.diskStorage({
    destination: function(req, file ,callback){
        callback(null, "upload/")
    },
    filename: function(req, file, callback){
        callback(null, file.originalname + "_" + Date.now())
    }
})

// 1. multer 미들웨어 등록
let upload = multer({
    storage: storage
})

router.post('/list', upload.single("image"), function(req, res) {
    // 삽입
    console.log(req.file);
    models.customer.create({
        image : '/image/' + req.file.filename,
        name : req.body.name,
        birthday : req.body.birthday,
        gender : req.body.gender,
        job : req.body.job,
        isDeleted : 0
    }).then(data => {
        console.log('data Insert :' + data);
    }).catch(err => {
        console.error('communication Error : ' + err);
    });
});

module.exports = router;