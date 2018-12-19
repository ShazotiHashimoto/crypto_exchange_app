const liqui = require('../liqui');

const liquiApi = {};

liquiApi.getMarkets = (req, res) => {
    return liqui.getInfo({}).then(function(data) {
        return res.jsonapi.send({ success: true, result: data });
    }).catch(function(err) {
        console.log('liqui.api.controller.getMarkets.catch', err);
        return res.jsonapi.error(err).send();
    });
};

module.exports = liquiApi;