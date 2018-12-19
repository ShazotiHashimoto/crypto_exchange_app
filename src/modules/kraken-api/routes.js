module.exports = (app, jsonapi) => {
    const Controller = require('./controller');

    app.get('/api/kraken/markets', jsonapi(), Controller.getMarkets);
}