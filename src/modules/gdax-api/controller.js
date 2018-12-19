const gdax = require('../gdax');

const gdaxApi = {};

gdaxApi.getMarkets = (req, res) => {
    console.log('headers', req.headers);
    return gdax.getMarkets({headers: { 'user-agent': req.headers['user-agent'] }})
        .then(function(data) {
            return res.jsonapi.send({ success: true, result: data });
        })
        .catch(function(err) {
            console.log('gdax.api.controller.getMarkets.catch', err);
            return res.jsonapi.error(err).send();
        });
};

module.exports = gdaxApi;