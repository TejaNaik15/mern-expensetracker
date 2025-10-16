

const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const transactionCtrl = require("../controllers/transactionCtrl");
const transactionRouter = express.Router();

//!add
transactionRouter.post("/create", isAuthenticated, transactionCtrl.create);
//! lists
transactionRouter.get("/lists", isAuthenticated, transactionCtrl.lists);
//! update
transactionRouter.put("/update/:id", isAuthenticated, transactionCtrl.update);
//! delete
transactionRouter.delete(
  "/delete/:id",
  isAuthenticated,
  transactionCtrl.deleteTran
);

module.exports = transactionRouter;