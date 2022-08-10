module.exports = {
    /**
     * Method based on early return pattern
     * @param number - number value
     */
    // getValue: (number) => {
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
