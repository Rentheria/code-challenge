function generatePascalsTriangle(numRows) {
    if (numRows <= 0) {
        return [];
    }

    const triangle = [[1]];

    for (let i = 1; i < numRows; i++) {
        const prevRow = triangle[i - 1];
        const currentRow = [1];

        for (let j = 1; j < i; j++) {
            currentRow.push(prevRow[j - 1] + prevRow[j]);
        }

        currentRow.push(1);
        triangle.push(currentRow);
    }

    return triangle;
}

function prinitTriangle(triangle) {
    if (triangle.length < 1) {
        return
    }
    const maxDigits = triangle[triangle.length - 1][Math.floor(triangle.length / 2)].toString().length;
    triangle.forEach((row, rowIndex) => {
        const spacing = " ".repeat((numRows - rowIndex) * (maxDigits + 1) / 2);
        console.log(spacing + "[" + row.map(num => num.toString().padStart(maxDigits)).join(" ".repeat(maxDigits)) + "]" );
    });
}
// Example usage:
const numRows = 6;
const pascalsTriangle = generatePascalsTriangle(numRows);
prinitTriangle(pascalsTriangle);

module.exports = { 
    generatePascalsTriangle,
    prinitTriangle
};
