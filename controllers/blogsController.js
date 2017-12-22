const blogDB = require('../models/blogs');
var request = require('request');
require('dotenv').config();


module.exports = {


  makeEmptyBlog(req, res) {
    res.json({
      id:  null,
      title: null,
      img:  null,
      issuetime: null,
      category:  null,
      author:  null,
      entry: null,
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
