
//@ts-ignore
var express = require('express');


export class IndexRouter {
    static getRouter():any{
        var index_router = express.Router();

        /* GET home page. */
        index_router.get('/', function(req, res, next) {
            res.render('index', { title: 'Express' });
        });

        index_router.post('/login', function(req, res, next){
            console.log(req);
            let username = req.body["username"];
            let password:string = req.body["password"];
            console.log(`username: ${username}, password: ${password}`);
            res.end("success");
        });

        return index_router;
    }
}