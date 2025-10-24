const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const transactionController = require("../controllers/transactionCtrl");
const transactionRouter = express.Router();

//!add
transactionRouter.post("/create", isAuthenticated, transactionController.create);
//! lists
transactionRouter.get("/lists", isAuthenticated, transactionController.getFilteredTransactions);
//! update
transactionRouter.put("/update/:id", isAuthenticated, transactionController.update);
//! delete
transactionRouter.delete(
  "/delete/:id",
  isAuthenticated,
  transactionController.delete
);

module.exports = transactionRouter;