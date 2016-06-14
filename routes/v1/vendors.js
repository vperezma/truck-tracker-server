
'use strict';

var express = require('express'),
    router = express.Router(),
    Promise = require('bluebird'),
    vendorsController = require('../../controllers/vendors');

router.route('/')
    .get(function (req, res) {
        Promise.try(function () {
           return vendorsController.getAll().then(function(vendor) {
                res.json(vendor);
            }).catch(function (err) {
                res.json(err);
            })
        })
    })
    .post(function(req, res) {
        Promise.try(function(){
            return vendorsController.create(req).then(function(vendor){
            res.json(vendor);
        }).catch(function(err){
            res.json(err);
        });
    });
    });

module.exports = router;