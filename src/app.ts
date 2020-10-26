import {IndexRouter} from "./routes/index";
//@ts-ignore
var createError = require('http-errors');
//@ts-ignore
var express = require('express');
//@ts-ignore
var path = require('path');
//@ts-ignore
var cookieParser = require('cookie-parser');
//@ts-ignore
var logger = require('morgan');
//@ts-ignore
var indexRouter = IndexRouter.getRouter();




export class app{
    static generateApplication():any{
        var app = express();
        
        // view engine setup
        //@ts-ignore
        app.set('views', path.join(__dirname, "..", 'views'));
        app.set('view engine', 'ejs');
        app.use(logger('dev'));
        app.use(express.json());
        app.use(express.urlencoded({ extended: false }));
        app.use(cookieParser());
        //@ts-ignore
        app.use(express.static(path.join(__dirname, "..", 'public')));

        app.use('/', indexRouter);

        // catch 404 and forward to error handler
        app.use(function(req, res, next) {
        next(createError(404));
        });

        // error handler
        app.use(function(err, req, res, next) {
            // set locals, only providing error in development
            res.locals.message = err.message;
            res.locals.error = req.app.get('env') === 'development' ? err : {};

            // render the error page
            res.status(err.status || 500);
            res.render('error');
        });

        return app;
    }
}