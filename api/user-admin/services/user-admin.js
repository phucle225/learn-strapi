'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/developer-docs/latest/development/backend-customization.html#core-services)
 * to customize this service
 */

module.exports = {
    login(params, populate) {
        return strapi.query('user_admins').findOne(params, populate);
      },
};
