const express = require("express");
const router = express.Router();

const {
    create_course
} = require('../controllers/courseController');

router.post("/", create_course);

module.exports = router;
