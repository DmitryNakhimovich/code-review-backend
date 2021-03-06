'use strict';
const { sanitizeEntity } = require('strapi-utils');

module.exports = {
  async find(ctx) {
    let entities;
    ctx.set('Content-Range', await strapi.services.courses.count());
    if (ctx.query._q) {
      entities = await strapi.services.courses.search(ctx.query);
    } else {
      entities = await strapi.services.courses.find(ctx.query);
    }

    return entities.map(entity =>
      sanitizeEntity(entity, { model: strapi.models.courses })
    );
  },
};
