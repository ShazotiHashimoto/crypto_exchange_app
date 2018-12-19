let wrapper = function (req, res) {
    this.req = req;
    this.res = res;

    this._errors = [];

    //add other stuff;
};

wrapper.prototype.send = function (data) {
    let json = {};

    //attach stuff to the response
    
    //handle errors
    if (this._errors.length) {
        json.errors = this._errors;
        let _status = 200;
        this._errors.forEach(err => {
            _status = Math.max(_status, parseInt(err.status));
        });

        this.res.status(_status);
    } else {
        json.data = data;
    }

    json.authors = [
        {
            name: 'Faizan Mohammed Qureshi'
        }
    ];

    return this.res.send(json);
};

wrapper.prototype.error = function (error) {
    if (!error.status) {
        error = {
            status: '500',
            title: 'Internal Server Error - Malformed Error',
            detail: JSON.stringify(error)
        };
    }
    
    this._errors = this._errors.concat(error);
    console.log('wrapper.error', error, this._errors);
    return this;
}

module.exports = {
    middleware: function (a) {
        // console.log('middleware-jsonapi.hit', a);
        return function (req, res, next) {
            // console.log('jsonapi.called', req, res);
            res.jsonapi = new wrapper(req, res);
            // console.log('middleware-jsonapi.called, go next', res,jsonapi );
            next();
        }
    }
};