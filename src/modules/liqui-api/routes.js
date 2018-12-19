'use strict';

module.exports = function (app, jsonapi) {
    const Controller = require('./controller');
    
    app.get('/api/liqui/markets', jsonapi(), Controller.getMarkets);
};