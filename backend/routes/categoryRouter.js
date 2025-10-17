const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const categoryController = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();


categoryRouter.post(
  "/create",
  isAuthenticated,
  categoryController.create
);

categoryRouter.get(
  "/lists",
  isAuthenticated,
  categoryController.lists
);

categoryRouter.put(
  "/update/:id",
  isAuthenticated,
  categoryController.update
);

categoryRouter.delete(
  "/api/v1/categories/delete/:id",
  isAuthenticated,
  categoryController.delete
);

module.exports = categoryRouter;