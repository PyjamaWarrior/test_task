const { testService } = require('../services');

describe('getValue', () => {
    it('should return given value', () => {
        expect(testService.getValue(1)).toEqual(1);
    });

    it('should return "G"', () => {
        expect(testService.getValue(3)).toEqual('G');
    });

    it('should return "N"', () => {
        expect(testService.getValue(5)).toEqual('N');
    });

    it('should return "GN"', () => {
        expect(testService.getValue(15)).toEqual('GN');
    });
});
