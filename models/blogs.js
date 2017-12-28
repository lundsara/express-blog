const db = require('../db/config');

//export all db query methods as one object
module.exports = {

  findAll() {
    console.log('in find all');
    return db.many(`
      SELECT *
        FROM blog
    `);
  },

  findById(id) {
    return db.one(`
      SELECT *
        FROM blog
       WHERE id = $1
    `, id);
  },
   findByBeautyCategory(blog) {
    return db.many(`
      SELECT *
        FROM blog
       WHERE category = 'Beauty'
    ` );
  },
  findByFitnessCategory(blog) {
    return db.many(`
      SELECT *
        FROM blog
       WHERE category = 'Fitness'
    ` );
  },
    findByHealthCategory(blog) {
    return db.many(`
      SELECT *
        FROM blog
       WHERE category = 'Health'
    ` );
  },

  create(blog) {
    return db.one(`
      INSERT INTO blog
      (title, subtitle, img_1, img_2, img_3, issuetime, category, author, quote_1, quote_2, p_1, p_2, p_3, p_4, p_5, link_1, link_2, link_3, link_4, link_5, tag_1, tag_2, tag_3, tag_4, tag_5)
      VALUES
      ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17. $18, $19, $20, $21, $22, $23, $24, $25)
      RETURNING *
    `, [blog.title, blog.subtitle, blog.img_1, blog.img_2, blog.img_3, blog.issuetime, blog.category, blog.author, blog.quote_1, blog.quote_2, blog.p_1, blog.p_2, blog.p_3, blog.p_4, blog.p_5, blog.link_1, blog.link_2, blog.link_3, blog.link_4, blog.link_5, blog.tag_1, blog.tag_2, blog.tag_3, blog.tag_4, blog.tag_5]);
  },

};



