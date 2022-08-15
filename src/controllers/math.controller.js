const { mathService } = require('../services');

module.exports = {
    getValue: async (req, res, next) => {
        try {
            const { number } = req.params;

            const value = mathService.getValue(+number);

            res.json(value);
        } catch (e) {
            next(e);
        }
    },
};
