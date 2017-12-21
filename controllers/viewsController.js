module.exports = {

//method handle a 404 error
  show404(err, req, res, next) {
    res.sendStatus(404);
  },
//method handle a 406 error
  show406(err, req, res, next) {
    res.sendStatus(406);
  },

//method to produce view of homepage
  showHome(req, res) {
    console.log('in showHome function');
    res.render('blogs/blogs-homepage', {
     blog: res.locals.blogs,
    });
  },
    showAbout(req, res) {
    res.render('blogs/blogs-about', {

  });
},

//method to produce view of blogs
  showBlogs(req, res) {
    console.log('in showBlogs function');
     res.render('blogs/blogs-index', {
      blog: res.locals.blogs,
    });
  },

    showBeautyBlogs(req, res) {
    console.log('in showBlogs function');
     res.render('blogs/blogs-beauty', {
      blog: res.locals.blogs,
    });
  },

    showHealthBlogs(req, res) {
    console.log('in showBlogs function');
     res.render('blogs/blogs-health', {
      blog: res.locals.blogs,
    });
  },
    showFitnessBlogs(req, res) {
    console.log('in showBlogs function');
     res.render('blogs/blogs-sweat', {
      blog: res.locals.blogs,
    });
  },

//method to produce view of a selected blog individually
  showOne(req, res) {
    console.log(res.locals)
    res.render('blogs/blogs-single', {
      blog: res.locals.blog,

    });
  },

//method handle view of creating a new blog
  handleCreate(req, res) {
    res.render('blogs/blogs-single', {

  });
 },

//method direct view for editing a selected blog
  handleUpdate(req, res) {
    res.render(`/blogs/${req.params.id}`);
  },

//method direct view to homepage after deleting a blog
  handleDelete(req, res) {
    res.redirect('/blogs');
  },
//method to produce view of add blog form
  showAddForm(req, res) {
    res.render('blogs/blogs-add');

  },

//method to produce form to edit blogs
  showEditForm(req, res) {
    res.render('blogs/blogs-edit', {
      blog: res.locals.blog,
  });
},

};

