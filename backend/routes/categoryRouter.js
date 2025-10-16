const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const {
  create,
  lists,
  update,
  deleteCat,
} = require("../controllers/categoryCtrl");
const categoryRouter = express.Router();

//!add
categoryRouter.post("/create", isAuthenticated, create);
//! lists
categoryRouter.get("/lists", isAuthenticated, lists);
//! update
categoryRouter.put("/update/:id", isAuthenticated, update);
//! delete
categoryRouter.delete("/delete/:id", isAuthenticated, deleteCat);

module.exports = categoryRouter;