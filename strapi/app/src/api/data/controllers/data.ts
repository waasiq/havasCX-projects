
import { Strapi } from "@strapi/strapi";

module.exports = {
    async exampleAction(ctx) {
      const entries = await strapi.db.query('api::data.data').findMany({
        select: ['title', 'author', 'body'],
        where: { title: 'About Me' },
      });

      ctx.send(entries); 
  },
};