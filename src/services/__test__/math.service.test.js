const { mathService } = require('../index');

describe('getValue', () => {
    it('should return given value', () => {
        expect(mathService.getValue(1)).toEqual(1);
    });

    it('should return "G"', () => {
        expect(mathService.getValue(3)).toEqual('G');
    });

    it('should return "N"', () => {
        expect(mathService.getValue(5)).toEqual('N');
    });

    it('should return "GN"', () => {
        expect(mathService.getValue(15)).toEqual('GN');
    });
});
