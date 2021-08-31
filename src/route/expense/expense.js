const express = require("express");
const {
  createExpenseCtrl,
  fetchExpenseCtrl,
  fetchExpensesCtrl,
  updateExpenseCtrl,
  deletExpenseCtrl,
} = require("../../controllers/expenses/expensesCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const expenseRoute = express.Router();

expenseRoute.post("/", authMiddleware, createExpenseCtrl);
expenseRoute.get("/", authMiddleware, fetchExpensesCtrl);
expenseRoute.get("/:id", authMiddleware, fetchExpenseCtrl);
expenseRoute.put("/:id", authMiddleware, updateExpenseCtrl);
expenseRoute.delete("/:id", authMiddleware, deletExpenseCtrl);
module.exports = expenseRoute;
