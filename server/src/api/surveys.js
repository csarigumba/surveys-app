const router = require("express").Router();

// A01: GET: /api/surveys - Get all surveys
// A02: GET: /api/surveys?title={keyword} Find all surveys which title contains keyword
router.get("/", (req, res, next) => {
  res.json("A01: GET: /api/surveys - Get all surveys");
});

// A03: POST: /api/surveys - Create a survey
router.post("/", (req, res, next) => {
  res.json("A03: POST: /api/surveys - Create a survey");
});

// A04: GET: /api/surveys/:id - Get a survey by id
router.get("/:id", (req, res, next) => {
  res.json("A04: GET: /api/surveys/:id - Get a survey by id");
});

// A05: PUT /api/surveys/:id Update a survey by :id
router.put("/:id", (req, res, next) => {
  res.json("A05: PUT /api/surveys/:id Update a survey by :id");
});

// A06: DELETE /api/surveys/:id delete a survey by :id
router.delete("/:id", (req, res, next) => {
  res.json("A06: DELETE /api/surveys/:id delete a survey by :id");
});

// A07: DELETE /api/surveys delete all surveys
router.delete("/", (req, res, next) => {
  res.json("A07: DELETE /api/surveys delete all surveys");
});

module.exports = router;
