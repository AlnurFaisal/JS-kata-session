const findMultiples = require("../src/question1");

describe('findMultiples', () => {
    it('should be a multiple of 5 to the limit of 25', () => {
        expect(findMultiples(5, 25)).toEqual([5, 10, 15, 20, 25]);
    });
    it('should be a multiple of 1 to the limit of 2 ', () => {
        expect(findMultiples(1, 2)).toEqual([1, 2]);
    });
    it('should be a multiple of 5 to the limit of 7', () => {
        expect(findMultiples(5, 7)).toEqual([5]);
    });
    it('should be a multiple of 4  to the limit of 27', function(){
        expect(findMultiples(4, 27)).toEqual([4, 8, 12, 16, 20, 24]);
    });
    it('should be a multiple of 11 to the limit of 54', () => {
        expect(findMultiples(11, 54)).toEqual([11, 22, 33, 44]);
    });
});