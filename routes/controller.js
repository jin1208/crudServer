//routes/controller.js
var models = require('../models');
const sequelize = require("sequelize");
const Op = sequelize.Op;

//exports.내보낼이름

exports.customerList = (req,res) => {
    // 복수의 요소 검색
    models.customer.findAll({ where: {
        [Op.or]: [
            {
                isDeleted: { [Op.ne]: 1}
            },
            {
                isDeleted: { [Op.eq]: null}
            },
        ]
    }})
    .then(result => {
    // result는 모든 Project 모델의 항목들을 배열로 받아온다
    res.json(result);
    })
    .catch(err => {
        console.error(err);
    })
};

exports.delete = (req) => {
    models.customer.destroy({where: {
        id: req.params.id
    }})
    .catch(err => {
        console.error(err);
    })
};

exports.update = (req) => {

    models.customer.update(
        {
            isDeleted: 1
        }, {
            where: {
                id: req.params.id
            }})
    .catch(err => {
        console.error(err);
    });
};

exports.searchList = (req,res) => {
    let search = req.params.search
    if(search){

    // 복수의 요소 검색
      models.customer.findAll({
        where:{
            [Op.or]: [
                {
                    name: {
                        [Op.like]: "%" + search + "%"
                    }
                },
                {
                    birthday: {
                        [Op.like]: "%" + search + "%"
                        }
                    },
                {
                    gender: {
                        [Op.like]: "%" + search + "%"
                        }
                    },
                {
                    job: {
                        [Op.like]: "%" + search + "%"
                        }
                    },
                ]
            }
        })
        .then(result => {
            // result는 모든 Project 모델의 항목들을 배열로 받아온다
            res.json(result);
            })
            .catch(err => {
                console.error(err);
            })
    } else {
        models.customer.findAll({ where: {
            [Op.or]: [
                {
                    isDeleted: { [Op.ne]: 1}
                },
                {
                    isDeleted: { [Op.eq]: null}
                },
            ]
        }})
        .then(result => {
            res.json(result);
            })
            .catch(err => {
                console.error(err);
            })
    }
};