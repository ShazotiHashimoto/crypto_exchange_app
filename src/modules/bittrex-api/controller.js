const bittrex = require('../bittrex');

let bittrexApi = {};

bittrexApi.getMarkets = (req, res) => {
    return bittrex.getMarkets({}).then(function (data) {
        return res.jsonapi.send({ success: true, result: data });
    }).catch(function (err) {
        console.log('bittrex.api.controller.getMarkets.catch', err);
        return res.jsonapi.error(err).send();
    });
};

bittrexApi.getCurrencies = (req, res) => {
    return bittrex.getCurrencies({}).then(function (data) {
        return res.jsonapi.send({ success: true, result: data });
    }).catch(function (err) {
        console.log('bittrex.api.controller.getCurrencies.catch', err);
        return res.jsonapi.error(err).send();
    });
};

module.exports = bittrexApi;