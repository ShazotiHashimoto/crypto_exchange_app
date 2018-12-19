'use strict';

module.exports = (app, jsonapi) => {
    const Controller = require('./controller');

    app.get('/api/gdax/markets', jsonapi(), Controller.getMarkets);
};