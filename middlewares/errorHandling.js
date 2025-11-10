export const errorHandler = (err, req, res, next) => {
  //If status is accidentally 200, and there is an error force it to 500. Otherwise, keep it as is.
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  let message = err.message;

  // castError happens when the user sends an invalid ID or something that doesn’t match the expected type.
  if (err.name === "CastError") {
    statusCode = 400;
    message = `Invalid ${err.path} with value ${err.value}`;
  }


  //always send a JSON response
  res.status(statusCode).json({
    success: false,
    message,
    stack: process.env.NODE_ENV === "production" ? null : err.stack,
  });
};
