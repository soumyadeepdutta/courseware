const router = require("express").Router();

const { allCourses, createNew, update, del } = require("../controllers/course");

router.delete("/delete/:id", del);
router.put("/update/:id", update);
router.post("/create", createNew);
router.get("/", allCourses);

module.exports = router;
