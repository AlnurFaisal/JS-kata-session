var listFiltering = require("../src/question3");
describe('listFiltering', () => {
    it('should return a list of positive numbers and remove all strings in the list', () => {
        expect(listFiltering([1, 2,'a','b'])).toEqual([1, 2]);
        expect(listFiltering([1,2,'aasf','1','123',123])).toEqual([1,2,123]);
    });
});