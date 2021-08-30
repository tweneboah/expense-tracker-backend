const express = require("express");
const {
  accountStatsCtrl,
} = require("../../controllers/accountStatsCtrl/accountStatsCtrl");

const authMiddleware = require("../../middlewares/auth/authMiddleware");

const accountStatsRoute = express.Router();

accountStatsRoute.get("/", accountStatsCtrl);
module.exports = accountStatsRoute;
