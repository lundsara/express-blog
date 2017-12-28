const blogDB = require('../models/blogs');
var request = require('request');
require('dotenv').config();


module.exports = {


  makeEmptyBlog(req, res) {
    res.json({
      id:  null,
      title: null,
      subtitle: null,
      img_1: null,
      img_2: null,
      img_3: null,
      issuetime: null,
      category: null,
      author: null,
      quote_1: null,
      quote_2: null,
      p_1: null,
      p_2: null,
      p_3: null,
      p_4: null,
      p_5: null,
      link_1: null,
      link_2: null,
      link_3: null,
      link_4: null,
      link_5: null,
      tag_1: null,
      tag_2: null,
      tag_3: null,
      tag_4: null,
      tag_5: null,
    });
  },

//method to display the index page
  index(req, res, next) {
    console.log('in controller.index');
    blogDB.findAll()
      .then((blogs) => {
        console.log(blogs);
        res.locals.blogs = blogs;
        next();
      })
      .catch(err => next(err));
  },


//method to pull out a single blog post
  getOne(req, res, next) {
    blogDB.findById(req.params.id)
      .then((blog) => {
        res.locals.blog = blog;
        next();
      })
      .catch(err => next(err));
  },
  //method to pull out a single blog post
  getBeauty(req, res, next) {
    blogDB.findByBeautyCategory(req.params.category)
      .then((blogs) => {
        res.locals.blogs = blogs;
        next();
      })
      .catch(err => next(err));
  },
   getFitness(req, res, next) {
    blogDB.findByFitnessCategory(req.params.category)
      .then((blogs) => {
        res.locals.blogs = blogs;
        next();
      })
      .catch(err => next(err));
  },
   getHealth(req, res, next) {
    blogDB.findByHealthCategory(req.params.category)
      .then((blogs) => {
        res.locals.blogs = blogs;
        next();
      })
      .catch(err => next(err));
  },

//method to create blog post
  create(req, res, next) {
    console.log('here');
    blogDB.create(req.body)
      .then((blog) => {
        res.locals.blog = blog;
        next();
      })
      .catch(err => next(err));
  },

//method to update blog posts
  update(req, res, next) {
    blogDB.update(req.body, req.params.id)
      .then((blog) => {
        res.locals.blog = blog;
        next();
      })
      .catch(err => next(err));
  },

//method to destroy posts
  destroy(req, res, next) {
    blogDB.destroy(req.params.id)
      .then(() => next())
      .catch(err => next(err));
  },


//method to show blog form
  showBlogForm: (req, res) => {
    res.json({message: 'I’m the form for new Blog entries. I post to /blogs'});
  },


};
