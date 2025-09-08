import ApiResponse from "../../utils/APiResponse.js";

const errorHandler = (error, req, res, next) => {
  console.error("Error:", error);

  // Custom ApiError
  if (error.statusCode) {
    return res
      .status(error.statusCode)
      .json(new ApiResponse(error.statusCode, {}, error.message));
  }

  // Mongoose validation error
  if (error.name === "ValidationError") {
    return res
      .status(400)
      .json(new ApiResponse(400, {}, error.join(" ")));
  }

  // Mongo duplicate key error
  if (error.code === 11000) {
    return res
      .status(409)
      .json(new ApiResponse(409, {}, "Duplicate key error"));
  }

  // Default: Internal server error
  return res
    .status(500)
    .json(new ApiResponse(500, {}, "Internal Server Error"));
};

export default errorHandler;
