const express =require('express');
const controller = require('../controllers/blogsController');
const views = require('../controllers/viewsController');
const blogsRouter = express.Router();


blogsRouter.get('/:id/edit', controller.getOne, views.showEditForm, views.show404);
blogsRouter.get('/new', views.showAddForm);
blogsRouter.get('/about', views.showAbout);

blogsRouter.route('/beauty')
.get(controller.getBeauty, views.showBeautyBlogs);

blogsRouter.route('/health')
.get(controller.getHealth, views.showHealthBlogs);

blogsRouter.route('/fitness')
.get(controller.getFitness, views.showFitnessBlogs);

blogsRouter.route('/:id')
.get(controller.getOne, views.showOne, views.show404)
.put(controller.update, views.handleUpdate, views.show406)
.delete(controller.destroy, views.handleDelete, views.show406);



blogsRouter.route('/')
.get(controller.index, views.showBlogs, views.show404)
.post(controller.create, views.handleCreate, views.show406);








module.exports = blogsRouter;
