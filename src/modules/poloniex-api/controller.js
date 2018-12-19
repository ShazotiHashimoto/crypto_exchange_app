const poloniex = require('../poloniex');

const poloniexApi = {};

poloniexApi.getMarkets = (req, res) => {
    return poloniex.getTickers({}).then(function(data) {
        return res.jsonapi.send({ success: true, result: data });
    }).catch(function(err) {
        console.log('poloniex.api.controller.getMarkets.catch', err);
        return res.jsonapi.error(err).send();
    });
};

poloniexApi.getCurrencies = (req, res) => {
    return poloniex.getCurrencies({}).then(function(data) {
        return res.jsonapi.send({ success: true, result: data });
    }).catch(function(err) {
        console.log('poloniex.api.controller.getMarkets.catch', err);
        return res.jsonapi.error(err).send();
    });
};

module.exports = poloniexApi;