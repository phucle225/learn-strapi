'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-controllers)
 * to customize this controller
 */
const {sanitizeEntity} = require('strapi-utils'); //This function removes all private fields from the model and its relations.
module.exports = {
  async login(ctx) {
    let entity = await strapi.services.test.test_login(ctx.request.body)
    //return entities.map(entity => sanitizeEntity(entity, { model: strapi.models.restaurant }));
    const data =  sanitizeEntity(entity, { model: strapi.models.test });
    delete data.password;
    return data;
  },
};
