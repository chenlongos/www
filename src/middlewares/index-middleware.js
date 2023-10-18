
var path = require('path');
var staticdir = require('koa-static');
var mount = require('koa-mount');
var Router = require('koa-router');
var swig = require('koa-swig');
var co = require('co');

var router = new Router();

var render;


module.exports = (config, { strapi })=> {


        strapi.server.use(async (ctx, next) => {
                await next();
                host = {'origin':"*"}
                if (ctx.req.headers.referer ){
                    host = new URL(ctx.req.headers.referer)
                }
                ctx.set("Access-Control-Allow-Origin", host.origin);

        });


        strapi.server.use(router.routes())

        strapi.server.use(staticdir(path.resolve('./public')))
        strapi.server.use(staticdir(path.resolve('./public/texap')))

};


