const express = require("express");
const usersController = require("../controllers/usersCtrl");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();


categoryRouter.post(
  "/api/v1/categories/create",
  isAuthenticated,
  categoryController.create
);

categoryRouter.get(
  "/api/v1/categories/lists",
  isAuthenticated,
  categoryController.lists
);

categoryRouter.put(
  "/api/v1/categories/update/:categoryId",
  isAuthenticated,
  categoryController.update
);

categoryRouter.delete(
  "/api/v1/categories/delete/:id",
  isAuthenticated,
  categoryController.delete
);

module.exports = categoryRouter;