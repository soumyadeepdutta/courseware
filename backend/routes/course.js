const router = require("express").Router();

const { allCourses, createNew } = require("../controllers/course");

router.get("/", allCourses);
router.post("/create", createNew);

module.exports = router;
