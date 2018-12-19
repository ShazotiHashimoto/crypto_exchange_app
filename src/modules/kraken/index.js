const Promise = require('bluebird');
const request = require('request');
const _public_path = require('../../config').kraken.public_uri;

const kraken = {};

kraken.getMarkets = (params) => {
    return new Promise ((resolve, reject) => {
        request
            .get({
                uri: _public_path + '/0/public/AssetPairs'
            }, function(err, resp, body) {
                if (err) {
                    reject(err);
                } else {
                    try {
                        const data = JSON.parse(body);

                        resolve(data);
                    } catch (e) {
                        reject({error: 'Failed to parse data from Kraken', details: e});
                    }
                }
            });
    });
};

module.exports = kraken;