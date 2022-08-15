module.exports = class ErrorExtended extends Error {
    /**
     * Custom error handler extended by status codes
     * @param status - error status code
     * @param message - error message
     */
    constructor(status, message = '') {
        super(message);
        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    }
};
