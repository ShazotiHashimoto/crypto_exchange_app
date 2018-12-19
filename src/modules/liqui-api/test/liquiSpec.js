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
};

describe('GET Liqui', function () {
    it('should get markets', function (done) {
        api.getMarkets({}, resMock)
            .then(function (res) {
                expect(res).to.be.an('object');
                expect(res.success).to.equal(true);
                expect(res.result).to.be.an('object');
                expect(res.result.pairs).to.be.an('object');
                Object.keys(res.result.pairs).forEach(function (pair) {
                    expect(res.result.pairs[pair]).to.be.an('object');
                    expect(res.result.pairs[pair]).to.have.property('decimal_places');
                    expect(res.result.pairs[pair]).to.have.property('min_price');
                    expect(res.result.pairs[pair]).to.have.property('max_price');
                    expect(res.result.pairs[pair]).to.have.property('min_amount');
                    expect(res.result.pairs[pair]).to.have.property('hidden');
                    expect(res.result.pairs[pair]).to.have.property('fee');
                });
                done();
            });
    });
})