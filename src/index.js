
// You should implement your task here.

module.exports = function towelSort (matrix) {

if (!matrix) {
        return [];
    }

let result = []

for (let i = 0; i < matrix.length; i += 1) {

    if (i % 2 === 0 || i === 0) {

        for (let j = 0; j < matrix[i].length; j += 1) {
    
            result.push(matrix[i][j])
            console.log(result)
        }
        
    } else {

        for (let k = matrix[i].length - 1; k >= 0; k -= 1) {

            result.push(matrix[i][k])
            console.log(result)
        }
    }

}
return result
console.log(result)


}

// const matrix = [
//     [1, 2, 3, 4],
//     [5, 6, 7, 8],
//     [9, 10, 11, 12],
//     [13, 14, 15, 16]
// ];
//  console.log(towelSort(matrix))
