const express = require("express");
const {
  createIncome,
  fetchIncomeCtrl,
  fetchIncomesCtrl,
  updateIncomeCtrl,
  deletIncomeCtrl,
} = require("../../controllers/income/incomeCtrl");
const authMiddleware = require("../../middlewares/auth/authMiddleware");

const incomeRoute = express.Router();

incomeRoute.post("/", authMiddleware, createIncome);
incomeRoute.get("/", fetchIncomesCtrl);
incomeRoute.get("/:id", fetchIncomeCtrl);
incomeRoute.put("/:id", updateIncomeCtrl);
incomeRoute.delete("/:id", deletIncomeCtrl);
module.exports = incomeRoute;
