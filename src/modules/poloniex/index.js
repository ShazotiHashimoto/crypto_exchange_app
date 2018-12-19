const Promise = require('bluebird');
const request = require('request');
const _public_uri = require('../../config').poloniex.public_uri;

const poloniex ={};

poloniex.getTickers = (params) => {
    return new Promise((resolve, reject) => {
        request
        .get(_public_uri + 'public?command=returnTicker', function(err, resp, body) {
            if (err) {
                console.log('poloniex.getTickers.then.err', err);
                reject(err);
            } else {
                let data = body;

                try {
                    data = JSON.parse(body);

                    resolve(data);
                } catch (e) {
                    reject({error: 'Failed to parse data from poloniex', details: e});
                }
            }
        });
    });
};

poloniex.getCurrencies = (params) => {
    return new Promise((resolve, reject) => {
        request
        .get(_public_uri + 'public?command=returnCurrencies', function(err, resp, body) {
            if (err) {
                console.log('poloniex.getCurrencies.then.err', err);
                reject(err);
            } else {
                let data = body;
                
                try {
                    data = JSON.parse(body);

                    resolve(data);
                } catch (e) {
                    reject({error: 'Failed to parse data from poloniex', details: e});
                }
            }
        });
    });
};

module.exports = poloniex;