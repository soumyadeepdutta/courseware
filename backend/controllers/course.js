const validator = require("../validators/course");
const Course = require("../models/course");

exports.allCourses = async (req, res) => {
  data = await Course.find();
  res.send(data);
};

exports.createNew = async (req, res) => {
  const result = validator(req.body);
  if (result.error)
    return res
      .status(400)
      .json({ status: false, message: result.error.message });
  let course = new Course({
    name: req.body.name,
    desc: req.body.desc,
    price: req.body.price,
  });
  if (await Course.findOne({ name: req.body.name }))
    return res.status(400).json({
      success: false,
      message: `Course "${req.body.name}" already exists`,
    });
  try {
    await course.save();
    return res.json({ success: true, data: course });
  } catch (ex) {
    console.log(ex);
    return res.status(400).json({
      success: false,
      message: "Something went wrong",
    });
  }
};

exports.update = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      useFindAndModify: false,
    });
    return res.json({
      success: true,
      data: course,
    });
  } catch (ex) {
    return res.status(400).json({
      success: false,
      message: "Update Failed",
    });
  }
};

exports.del = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    return res.json({
      success: true,
      data: course,
    });
  } catch (ex) {
    return res.status(400).json({
      success: false,
      message: "Delete Failed",
    });
  }
};
