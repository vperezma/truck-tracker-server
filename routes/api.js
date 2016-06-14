'use strict';

var express = require('express'),
    models = require('../server/models'),
    fs = require('fs'),
    router = express.Router(),
    v1Routes = fs.readdirSync(__dirname + '/v1');

module.exports = function (app) {

    /**
     * V1 Routes
     */
    v1Routes.forEach(function (route) {
        var routeName = route.split('.')[0];
        app.use('/api/v1/' + routeName, require('./v1/' + route));
    });

    return router;
};