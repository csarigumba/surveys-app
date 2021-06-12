// A01: GET: /api/surveys - Get all surveys
// A02: GET: /api/surveys?title={keyword} Find all surveys which title contains keyword
exports.findAll = (req, res) => {
  res.send("A01-A02");
};

// A03: POST: /api/surveys - Create a survey
exports.create = (req, res) => {
  res.send("A03");
};

// A04: GET: /api/survey/:id - Get a survey by id
exports.findOne = (req, res) => {
  res.send("A04");
};

// A05: PUT /api/survey/:id Update a survey by :id
exports.updateOne = (req, res) => {
  res.send("A05");
};

// A06: DELETE /api/survey/:id delete a survey by :id
exports.deleteOne = (req, res) => {
  res.send("A06");
};

// A07: DELETE /api/surveys delete all surveys
exports.deleteAll = (req, res) => {
  res.send("A07");
};
