const express = require("express");
const { homepage, studentsignup } = require("../controllers/indexController");
const router = express.Router();

// Get
router.get("/", homepage);

// Post /student/signup
router.post("/student/signup", studentsignup);

module.export = router;
