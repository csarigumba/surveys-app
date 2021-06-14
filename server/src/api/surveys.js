const router = require("express").Router();
const db = require("../db");
const surveys = db.get("surveys");
const schema = require("../validation/survey.validation");

// A01: GET: /api/surveys - Get all surveys
// A02: GET: /api/surveys?title={keyword} Find all surveys which title contains keyword
router.get("/", async (req, res, next) => {
  console.log(`Running A01 API. Find all surveys.`);

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
  console.log(`Running A03 API. Create survey.`);
  try {
    const value = await schema.validateAsync(req.body);
    const insertedSurvey = await surveys.insert(value);
    res.json(insertedSurvey);
  } catch (error) {
    console.error(`Error creating survey: ${error.message}`);
    res.json(error);
  }
});

// A04: GET: /api/surveys/:id - Get a survey by id
router.get("/:id", async (req, res, next) => {
  console.log(`Running A04 API. Find one.`);

  try {
    const surveyId = req.params.id;
    console.log(`Finding survey with id: ${surveyId}`);
    const survey = await surveys.findOne({ _id: surveyId });
    console.log(survey);

    if (!survey) next();
    console.log(`Survey found: ${surveyId}`);
    res.json(survey);
  } catch (error) {
    console.error(`No survey found. reason=${error.message}`);
    res.json({});
  }
});

// A05: PUT /api/surveys/:id Update a survey by :id
router.put("/:id", async (req, res, next) => {
  console.log(`Running A05 API: Find one and update.`);

  try {
    const surveyId = req.params.id;
    const requestBody = req.body;
    const updatedSurvey = await surveys.findOneAndUpdate({ _id: surveyId }, { $set: requestBody });
    res.json(updatedSurvey);
  } catch (error) {
    console.error(`Failed to update survey. reason=${error.message}`);
    res.json({});
  }
});

// A06: DELETE /api/surveys/:id delete a survey by :id
router.delete("/:id", async (req, res, next) => {
  console.log(`Running A06 API: Find one and delete.`);

  try {
    const surveyId = req.params.id;
    const updatedSurvey = await surveys.findOneAndDelete({ _id: surveyId });
    res.json(updatedSurvey);
  } catch (error) {
    console.error(`Failed to delete survey. reason=${error.message}`);
    res.json({});
  }
});

// A07: DELETE /api/surveys delete all surveys
router.delete("/", async (req, res, next) => {
  console.log(`Running A07 API: Delete all surveys`);

  try {
    const deleteResponse = await surveys.remove({});
    res.json(deleteResponse);
  } catch (error) {
    console.error(`Failed to delete surveys: ${error.message}`);
    res.json({});
  }
});

module.exports = router;
