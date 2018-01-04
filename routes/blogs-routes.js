const express =require('express');
const controller = require('../controllers/blogsController');
const views = require('../controllers/viewsController');
const blogsRouter = express.Router();



blogsRouter.get('/about', views.showAbout);
blogsRouter.get('/contact', views.showContact);
blogsRouter.get('/subscribe', views.showSubscribe);

blogsRouter.route('/beauty')
.get(controller.getBeauty, views.showBeautyBlogs);

blogsRouter.route('/health')
.get(controller.getHealth, views.showHealthBlogs);

blogsRouter.route('/fitness')
.get(controller.getFitness, views.showFitnessBlogs);

blogsRouter.route('/:id')
.get(controller.getOne, views.showOne, views.show404)




blogsRouter.route('/blogs')
.get(controller.index, views.showBlogs, views.show404)









module.exports = blogsRouter;
