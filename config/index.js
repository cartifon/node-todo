var configValues = require('./config');

module.exports= {
    getDbConnectionString: function() {
        return 'mongodb://' + configValues.uname +
        ':' +configValues.pwd + '@ds061325.mlab.com:61325/node-todo';
    }
};
