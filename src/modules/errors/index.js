const error_codes = require('./error_codes');

module.exports = function (type) {
    if (!code || !error_codes[type]) { return {}; }

    let err = Object.assign({}, error_codes[type]);
    return err;
}