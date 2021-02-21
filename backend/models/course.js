const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        min: 3,
        max: 100,
    },
    desc: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Course", courseSchema);
