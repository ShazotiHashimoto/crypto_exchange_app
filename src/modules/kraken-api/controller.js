const kraken = require('../kraken');

const krakenApi = {};

krakenApi.getMarkets = (req, res) => {
    return kraken.getMarkets({})
        .then(function(data) {
            return res.jsonapi.send({ success: true, result: data });
        })
        .catch(function(err) {
            return res.jsonapi.error(err.code).send();
        });
};

module.exports = krakenApi;