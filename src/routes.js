module.exports = function (app) {
    const bittrex = require('./modules/bittrex-api/routes');
    const poloniex = require('./modules/poloniex-api/routes');
    const liqui = require('./modules/liqui-api/routes');
    const gdax = require('./modules/gdax-api/routes');
    const kraken = require('./modules/kraken-api/routes');
    const jsonapi = require('./modules/middleware-jsonapi').middleware;
    
    bittrex(app, jsonapi);
    poloniex(app, jsonapi);
    liqui(app, jsonapi);
    gdax(app, jsonapi);
    kraken(app, jsonapi);
};