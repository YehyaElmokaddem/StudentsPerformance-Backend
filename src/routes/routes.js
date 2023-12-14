const express = require("express");
const router = express.Router();
const cors = require("cors");
const studentsController = require("../controllers/studentsController");
const dashboardController = require("../controllers/dashboardController");

// CORS middleware
router.use(
  cors({
    origin: "*",
  })
);

// Define data endpoints routes
router.get("/all", studentsController.getAll);

// Define dashboard endpoints routes
router.get("/counts", dashboardController.getCounts);
router.get("/avg", dashboardController.getAverageScores);
router.get("/performance", dashboardController.getPerformance);

module.exports = router;
