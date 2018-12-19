'use strict';

module.exports = function (app, jsonapi) {
    const Controller = require('./controller');
    
    app.get('/api/bittrex/markets', jsonapi(), Controller.getMarkets);
    app.get('/api/bittrex/currencies', jsonapi(), Controller.getCurrencies);
};