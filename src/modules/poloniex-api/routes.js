'use strict';

module.exports = (app, jsonapi) => {
    const Controller = require('./controller');

    app.get('/api/poloniex/markets', jsonapi(), Controller.getMarkets);
    app.get('/api/poloniex/currencies', jsonapi(), Controller.getCurrencies);
};