exports.notFound = (req, res, next) => {
  const error = new Error(`Url not found: ${req.originalUrl} 🤯`);
  error.status = 404;
  next(error);
};

exports.errorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    status: err.status || 500,
    message: err.message,
    stack: process.env.NODE_ENV === "production" ? "🥞" : err.stack
  });
};
