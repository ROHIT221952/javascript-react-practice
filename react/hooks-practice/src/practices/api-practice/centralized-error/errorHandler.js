export function getErrorMessage(error) {
  if (!error.response) {
    return "Network error. Please check your internet connection.";
  }
  
  const status = error.response?.status;

  if (status === 400) {
    return "Invalid request. Please check your data.";
  }

  if (status === 422) {
    return "Validation failed. Please check your input.";
  }

  if (status === 401) {
    return "Please login first.";
  }

  if (status === 403) {
    return "You don't have permission to perform this action.";
  }

  if (status === 404) {
    return "Requested data not found.";
  }

  if (status === 409) {
    return "Data already exists.";
  }

  if (status === 429) {
    return "Too many requests. Please try again later.";
  }

  if (status === 502) {
    return "Bad gateway. Please try again later.";
  }

  if (status === 503) {
    return "Service temporarily unavailable. Please try again later.";
  }

  if (status === 504) {
    return "Server response timed out. Please try again later.";
  }

  if (status === 500) {
    return "Internal server error. Please try again later.";
  }

  return "Something went wrong. Please try again.";
}
