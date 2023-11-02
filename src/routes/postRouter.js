const express = require('express');
const postController = require('../controllers/postController');
const { validateToken } = require('../middlewares/validateToken');
const { validateFields, 
  validateCategoryIds } = require('../middlewares/validateNewPost');

const postRouter = express.Router();

postRouter.post(
  '/', 
  validateToken, 
  validateFields, 
  validateCategoryIds,
  postController.createPost,
);

postRouter.get(
  '/search',
  validateToken,
  postController.readPostByQuery,
);

postRouter.get(
  '/',
  validateToken,
  postController.readAllPosts,
);

postRouter.get(
  '/:id',
  validateToken,
  postController.readPostById,
);

module.exports = postRouter;