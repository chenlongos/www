'use strict';

/**
 * config controller
 */

const { createCoreController } = require('@strapi/strapi').factories;


module.exports = createCoreController('api::config.config', ({ strapi }) =>  ({

    async find(ctx){
        let query = ctx.query

        let key = query.keyword
        if (query.filter){

            var result = await strapi.db.query('api::config.config').findMany({
                where: {
                  key: {
                      $contains: key,
                  },
                },
              });
        }else {
           var result = await strapi.db.query('api::config.config').findMany({
               where:{key:key},
            });
        }
        return result;
    },

}));
