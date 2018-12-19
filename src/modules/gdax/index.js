const Promise = require('bluebird');
const request = require('request');
const _public_path = require('../../config').gdax.public_uri;

const gdax = {};

gdax.getMarkets = (params) => {
    return new Promise((resolve, reject) => {
        request
            .get({
                uri: _public_path + 'products',
                headers: params.headers
            }, (err, resp, body) => {
                if (err) {
                    reject(err);
                } else {
                    try {
                        let data = JSON.parse(body);

                        resolve(data);
                    } catch(e) {
                        reject({error: 'Failed to parse data from GDAX', details: e});
                    }
                }
            });
    });
};

module.exports = gdax;