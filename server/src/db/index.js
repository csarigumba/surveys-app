const { default: monk } = require("monk");
const db = monk(process.env.DB_HOST);

module.exports = db;
