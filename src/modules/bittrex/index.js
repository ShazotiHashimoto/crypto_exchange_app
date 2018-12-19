const Promise = require('bluebird');
const request = require('request');
const _public_path = require('../../config').bittrex.public_uri;

const bittrex = {};

bittrex.getMarkets = (params) => {
    return new Promise((resolve, reject) => {
        request
            .get(_public_path + 'getmarkets', (err, resp, body) => {
                if (err) {
                    console.log('bittrex.getMarkets.then', err);
                    reject(err);
                } else {
                    let data = {};
                    try {
                        data = JSON.parse(body);

                        resolve(data.result);
                    } catch (e) {
                        reject({error: 'Failed to parse data from bittrex', details: e});
                    }
                }
            })
        });
};

bittrex.getCurrencies = (params) => {
    return new Promise((resolve, reject) => {
        request
            .get(_public_path + 'getcurrencies', (err, resp, body) => {
                if (err) {
                    console.log('bittrex.getCurrencies.then', err);
                    reject(err);
                } else {
                    let data = {};
                    try {
                        data = JSON.parse(body);

                        resolve(data.result);
                    } catch (e) {
                        reject({error: 'Failed to parse data from bittrex', details: e});
                    }
                }
            });
    });
}

module.exports = bittrex;