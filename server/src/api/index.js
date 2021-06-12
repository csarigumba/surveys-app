const router = require("express").Router();

const surveys = require("./surveys");
router.use("/surveys", surveys);

module.exports = router;
