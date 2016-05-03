var userLogin= require('../cmdb/user');

module.exports = function(app){
    app.get('/',userLogin.login)
};