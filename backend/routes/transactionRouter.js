const express = require("express");
const isAuthenticated = require("../middlewares/isAuth");
const transactionController = require("../controllers/transactionCtrl");
const transactionRouter = express.Router();

<<<<<<< Updated upstream
transactionRouter.post(
  "/create",
  isAuthenticated,
  transactionController.create
);

transactionRouter.get(
  "/lists",
  isAuthenticated,
  transactionController.getFilteredTransactions
);

transactionRouter.put(
  "/update/:id",
  isAuthenticated,
  transactionController.update
);

=======
//!add
transactionRouter.post("/create", isAuthenticated, transactionCtrl.create);
//! lists
transactionRouter.get("/lists", isAuthenticated, transactionCtrl.getFilteredTransactions);
//! update
transactionRouter.put("/update/:id", isAuthenticated, transactionCtrl.update);
//! delete
>>>>>>> Stashed changes
transactionRouter.delete(
  "/delete/:id",
  isAuthenticated,
  transactionController.delete
);

module.exports = transactionRouter;