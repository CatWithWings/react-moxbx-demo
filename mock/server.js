var homeServer = require('./home-server');

module.exports = function(app) {
    homeServer(app);
}