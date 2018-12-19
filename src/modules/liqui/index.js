const Promise = require('bluebird');
const request = require('request');
const _public_path = require('../../config').liqui.public_uri;

const liqui = {};

liqui.getInfo = (params) => {
    return new Promise((resolve, reject) => {
        request
        .get(_public_path + 'info', (err, resp, body) => {
            if (err) {
                console.log('liqui.getMarkets.then.err', err);
                reject(err);
            } else {
                let data = body;
                
                try {
                    data = JSON.parse(body);

                    resolve(data);
                } catch (e) {
                    reject({error: 'Failed to parse data from liqui', details: e});
                }
            }
        });
    });
};

module.exports = liqui;