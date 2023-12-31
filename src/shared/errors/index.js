class BadRequestError extends Error {
    constructor(msg) {
      super(msg);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, BadRequestError);
      }
    }
  }
  
  class NotFoundError extends Error {
    constructor(msg) {
      super(msg);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, NotFoundError);
      }
    }
  }
  
  class UnauthorizedError extends Error {
    constructor(msg) {
      super(msg);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, UnauthorizedError);
      }
    }
  }
  
  class ForbiddenError extends Error {
    constructor(msg) {
      super(msg);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ForbiddenError);
      }
    }
  }
  
  class ConflictError extends Error {
    constructor(msg) {
      super(msg);
  
      if (Error.captureStackTrace) {
        Error.captureStackTrace(this, ConflictError);
      }
    }
  }
  
  module.exports = {
    BadRequestError,
    NotFoundError,
    ForbiddenError,
    UnauthorizedError,
    ConflictError,
  };
  