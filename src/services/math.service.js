const { ErrorMessagesEnum, StatusCodesEnum } = require('../constants');
const ErrorExtended = require('../error/error-extended');

module.exports = {
    /**
     * Method based on early return pattern
     * @param number - number value
     */
    // getValue: (number) => {
    //     if (Number.isNaN(number)) {
    //         throw new ErrorExtended(StatusCodesEnum.BAD_REQUEST, ErrorMessagesEnum.WRONG_DATA_TYPE);
    //     }
    //
    //     if (number % 3 === 0 && number % 5 === 0) {
    //         return 'GN';
    //     }
    //     if (number % 3 === 0) {
    //         return 'G';
    //     }
    //     if (number % 5 === 0) {
    //         return 'N';
    //     }
    //
    //     return number;
    // },
    /**
     * Another variant of previous method
     * @param number - number value
     */
    getValue: (number) => {
        if (Number.isNaN(number)) {
            throw new ErrorExtended(StatusCodesEnum.BAD_REQUEST, ErrorMessagesEnum.WRONG_DATA_TYPE);
        }

        let value = '';

        if (number % 3 === 0) {
            value += 'G';
        }
        if (number % 5 === 0) {
            value += 'N';
        }

        return value ? value : number;
    },
};
