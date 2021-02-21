const validator = require("../validators/course");
const Course = require("../models/course");

/**
 * @api /api/courses/
 * @method GET
 * @access public
 * @param none
 * @returns All Courses
 */
exports.allCourses = async (req, res) => {
    data = await Course.find();
    res.send(data);
};

/**
 * @api /api/courses/create
 * @method POST
 * @access private
 * @param name Course name
 * @param desc Course description
 * @param price Course price
 * @returns Create new course
 * @throws success : false if falied with a message
 */
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

/**
 * @api /api/courses/update/:id
 * @method PUT
 * @access private
 * @param name Updated Course name
 * @param desc  Updated Course description
 * @param price Updated Course price
 * @returns Updated course
 * @throws success : false if falied with a message
 */
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

/**
 * @api /api/courses/delete/:id
 * @method DELETE
 * @access private
 * @returns Deleted course
 * @throws success : false if falied with a message
 */
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
