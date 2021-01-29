const { func } = require("joi");

const Joi = require("joi");

module.exports = function (course) {
  const schema = Joi.object({
    name: Joi.string().min(3).max(100).required(),
    desc: Joi.string().required().min(10),
    price: Joi.number().greater(5).required(),
  });
  const result = schema.validate(course);
  return result;
};
