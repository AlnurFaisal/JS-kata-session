var firstNonConsecutive = require("../src/question2");
describe('firstNonConsecutive', () => {
    it('should return 6 as 6 is non-consecutive', () => {
        expect(firstNonConsecutive([1,2,3,4,6,7,8])).toEqual(6);
    });
    it('should return 13 as 13 is non-consecutive', function(){
        expect(firstNonConsecutive([1,2,3,4,5,6,7,8,9,10,11,13,14,15,16,17])).toEqual(13);
    });
    it('should return null if all numbers in array are sequential', () => {
        expect(firstNonConsecutive([1,2,3,4,5,6])).toEqual(undefined);
    });
    it('test for negative numbers, should return null', () => {
       expect(firstNonConsecutive([-8, -7, -6, -5, -4, -3, -2, -1, 0, 1])).toEqual(undefined); 
    });
});