module.exports = class ErrorHandler extends Error {
    /**
     * Custom error handler extended by custom code
     * @param status - error status code
     * @param customCode - custom code of error can be something like 4041 - User not found, 4041 - Post not found
     * @param message - error message
     */
    constructor(status, customCode, message = '') {
        super(message);
        this.status = status;
        this.customCode = customCode;

        Error.captureStackTrace(this, this.constructor);
    }
};
