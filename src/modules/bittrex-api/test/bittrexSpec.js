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
            console.log('send.error', res);
        }
    }
}

describe( 'GET bittrex', function () {
    it('should get markets', function (done) {
        api.getMarkets({}, resMock)
            .then(function (res) {
                expect(res).to.be.an('object');
                expect(res.success).to.equal(true);
                expect(res.result).to.be.an('array');
                expect(res.result[0]).to.be.an('object');
                expect(res.result[0]).to.have.property('MarketCurrency');
                expect(res.result[0]).to.have.property('BaseCurrency');
                expect(res.result[0]).to.have.property('MarketCurrencyLong');
                expect(res.result[0]).to.have.property('BaseCurrencyLong');
                expect(res.result[0]).to.have.property('MinTradeSize');
                expect(res.result[0]).to.have.property('MarketName');
                expect(res.result[0]).to.have.property('IsActive');
                expect(res.result[0]).to.have.property('Created');
                expect(res.result[0]).to.have.property('LogoUrl');
                done();
            });
    });

    it('should get currencies', function(done) {
        api.getCurrencies({}, resMock)
            .then(function(res) {
                expect(res).to.be.an('object');
                expect(res.success).to.equal(true);
                expect(res.result).to.be.an('array');
                expect(res.result[0]).to.be.an('object');
                expect(res.result[0]).to.have.property('Currency');
                expect(res.result[0]).to.have.property('CurrencyLong');
                expect(res.result[0]).to.have.property('MinConfirmation');
                expect(res.result[0]).to.have.property('TxFee');
                expect(res.result[0]).to.have.property('IsActive');
                expect(res.result[0]).to.have.property('CoinType');
                expect(res.result[0]).to.have.property('BaseAddress');
                done();
            });
    });
});

