const { testService } = require('../services');

module.exports = {
    getValue: async (req, res, next) => {
        try {
            const { number } = req.params;

            const value = testService.getValue(+number);

            res.json(value);
        } catch (e) {
            next(e);
        }
    },
};
