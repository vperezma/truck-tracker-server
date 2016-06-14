
// Import models.
var models = require('../server/models'),
    Promise = require('bluebird'),
    vendor = models.Vendor;

module.exports = {
    /**
     *
     * @param req
     * @param res
     * @returns {*|promise}
     */
    create: function(req, res){
        return new Promise(function(resolve, reject) {
            vendor.create(req.body)
                .then(function (res, err) {
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                });
        })
    },
    /**
     *
     * @param req
     * @param res
     * @returns {*|promise}
     */
    getAll: function(req, res) {
        return new Promise(function(resolve, reject){
            vendor.findAll()
                .then(function(res, err){
                    if (err) {
                        reject(err);
                    } else {
                        resolve(res);
                    }
                })
        })
    },
    /**
     *
     * @param req
     * @param res
     * @returns {*|promise}
     */
    getById: function(req, res) {

    },
    /**
     *
     * @param req
     * @param res
     * @returns {*|promise}
     */
    destroy: function(req, res) {

    }
};