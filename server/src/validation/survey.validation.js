const Joi = require("@hapi/joi");

const schema = Joi.object({
  title: Joi.string().min(3).max(30).required(),
  description: Joi.string(),
  questions: Joi.array()
});

module.exports = schema;
