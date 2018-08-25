'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongodb = require('mongodb');

var _mongodb2 = _interopRequireDefault(_mongodb);

var _q = require('q');

var _q2 = _interopRequireDefault(_q);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MongoClient = _mongodb2.default.MongoClient;

async function createModule(uri) {
    var deferred = _q2.default.defer();
    MongoClient.connect(uri, { useNewUrlParser: true }, function (err, client) {
        if (err) {
            deferred.reject(err);
            return;
        };
        var db = client.db(uri.split('/').pop());
        deferred.resolve(db);
    });
    return deferred.promise;
}

exports.default = {
    createModule: createModule
};