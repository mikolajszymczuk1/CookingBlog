import express from 'express';
import {
  getAllRecipesAction,
  getNewestRecipesAction,
  getDishCategoriesAction,
  getDifficultLevelsAction,
  getSingleRecipeAction,
  getRecipesPageAction,
  getRecipesPageUserAction,
  getUserLikesAction,
  uploadRecipeImageAction,
  createRecipeAction,
  updateRecipeAction,
  likeAction,
  dislikeAction,
} from '@/controller/recipeController';
import { verifyToken } from '@/middleware/auth';

const recipeApi = express.Router();

recipeApi.get('/recipes', getAllRecipesAction);

recipeApi.get('/recipesPage', getRecipesPageAction);

recipeApi.get('/recipesPageUser', verifyToken, getRecipesPageUserAction);

recipeApi.get('/newestRecipes', getNewestRecipesAction);

recipeApi.get('/singleRecipe/:recipeId', getSingleRecipeAction);

recipeApi.get('/dishCategories', getDishCategoriesAction);

recipeApi.get('/difficultLevels', getDifficultLevelsAction);

recipeApi.get('/userLikes', getUserLikesAction);

recipeApi.post('/uploadRecipeImage', verifyToken, uploadRecipeImageAction);

recipeApi.post('/createRecipe', verifyToken, createRecipeAction);

recipeApi.post('/like', verifyToken, likeAction);

recipeApi.put('/updateRecipe', verifyToken, updateRecipeAction);

recipeApi.delete('/dislike', verifyToken, dislikeAction);

export default recipeApi;
