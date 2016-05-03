/**
 * Created by wb-zhangxin.q on 2016/4/14.
 */
var server=require('../dao/user.server');

module.exports={
    login:function(req,res){
        server.login()
    }
};