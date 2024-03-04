const { generatePascalsTriangle, prinitTriangle } = require('./pascal');


describe('generatePascalsTriangle', () => {
    it('should return an empty array if numRows is less than or equal to 0', () => {
        expect(generatePascalsTriangle(0)).toEqual([]);
        expect(generatePascalsTriangle(-1)).toEqual([]);
    });

    it('should generate the correct Pascal\'s triangle for numRows > 0', () => {
        const numRows = 5;
        const expectedTriangle = [
             [1],
            [1, 1],
          [1, 2, 1],
         [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
        ];
        expect(generatePascalsTriangle(numRows)).toEqual(expectedTriangle);
    });
});
