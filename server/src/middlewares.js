exports.notFound = (req, res, next) => {
  console.log("notFound");
  res.status(404);
  const error = new Error(`Url not found: ${req.originalUrl} 🤯`);
  next(error);
};
