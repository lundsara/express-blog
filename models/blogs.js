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
       WHERE category = Beauty
    ` );
  },


  create(blog) {
    return db.one(`
      INSERT INTO blog
      (title, img, issuetime, category, author, entry)
      VALUES
      ($1, $2, $3, $4, $5, $6)
      RETURNING *
    `, [blog.title, blog.img, blog.issuetime, blog.category, blog.author, blog.entry]);
  },

  update(blog, id) {
    console.log(blog, id);
    return db.one(`
      UPDATE blog
      SET
      title = $1,
      img = $2,
      issuetime = $3,
      category = $4,
      author = $5,
      entry = $6
      WHERE id = $7
      RETURNING *
    `, [blog.title, blog.img, blog.issuetime, blog.category, blog.author, blog.entry]);
  },


  destroy(id) {
    return db.none(`
      DELETE
        FROM blog
       WHERE id = $1
    `, id);
  },
};



