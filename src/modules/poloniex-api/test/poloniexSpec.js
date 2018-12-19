const rewire = require('rewire');
const chai = require('chai');
const expect = chai.expect;

let api = rewire('../controller');

const resMock = {
    jsonapi: {
        send: function(res) {
            return new Promise(function (resolve, reject) {
                resolve(res);
            });
        },
        error: function(err) {
            console.log('send.error', err);
            return new Promise(function (resolve, reject) {
                reject(err);
            });
        }
    }
};

describe('GET Poloniex', function() {
    it('should get markets', function(done) {
        api.getMarkets({}, resMock)
            .then(function(res) {
                expect(res).to.be.an('object');
                expect(res.success).to.equal(true);
                expect(res.result).to.be.an('object');
                Object.keys(res.result).forEach(function (market) {
                    expect(res.result[market]).to.be.an('object');
                    expect(res.result[market]).to.have.property('id');
                    expect(res.result[market]).to.have.property('last');
                    expect(res.result[market]).to.have.property('lowestAsk');
                    expect(res.result[market]).to.have.property('highestBid');
                    expect(res.result[market]).to.have.property('percentChange');
                    expect(res.result[market]).to.have.property('baseVolume');
                    expect(res.result[market]).to.have.property('quoteVolume');
                    expect(res.result[market]).to.have.property('isFrozen');
                    expect(res.result[market]).to.have.property('high24hr');
                    expect(res.result[market]).to.have.property('low24hr');
                });
                done();
        });
    });

    it('should get currencies', function(done) {
        api.getCurrencies({}, resMock)
            .then(function(res) {
                expect(res).to.be.an('object');
                expect(res.success).to.equal(true);
                expect(res.result).to.be.an('object');
                Object.keys(res.result).forEach(function (currency) {
                    expect(res.result[currency]).to.be.an('object');
                    expect(res.result[currency]).to.have.property('id');
                    expect(res.result[currency]).to.have.property('name');
                    expect(res.result[currency]).to.have.property('txFee');
                    expect(res.result[currency]).to.have.property('minConf');
                    expect(res.result[currency]).to.have.property('depositAddress');
                    expect(res.result[currency]).to.have.property('disabled');
                    expect(res.result[currency]).to.have.property('delisted');
                    expect(res.result[currency]).to.have.property('frozen');
                });
                done();
        });
    });
});