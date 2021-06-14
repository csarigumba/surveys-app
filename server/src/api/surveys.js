const router = require("express").Router();
const db = require("../db");
const surveys = db.get("surveys");

// A01: GET: /api/surveys - Get all surveys
// A02: GET: /api/surveys?title={keyword} Find all surveys which title contains keyword
router.get("/", async (req, res, next) => {
  console.log(`Running A01 API.`);
  try {
    const items = await surveys.find({});
    res.json(items);
  } catch (error) {
    console.error(`Error retrieving surveys: ${error.message}`);
    res.json({});
  }
});

// A03: POST: /api/surveys - Create a survey
router.post("/", async (req, res, next) => {
  console.log(`Running A03 API.`);
  try {
    const requestBody = req.body;
    const insertedSurvey = await surveys.insert(requestBody);
    res.json(insertedSurvey);
  } catch (error) {
    console.error(`Error creating survey: ${error.message}`);
    res.json({});
  }
});

// A04: GET: /api/surveys/:id - Get a survey by id
router.get("/:id", async (req, res, next) => {
  console.log(`Running A04 API.`);

  try {
    const surveyId = req.params.id;
    console.log(`Finding survey with id: ${surveyId}`);
    const survey = await surveys.findOne({ _id: surveyId });

    if (!survey) next();
    console.log(`Survey found: ${surveyId}`);
    res.json(survey);
  } catch (error) {
    console.error(`No survey found. reason=${error.message}`);
    res.json({});
  }
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
