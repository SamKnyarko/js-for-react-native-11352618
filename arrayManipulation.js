

/**
 * 
 *
 * @param {number[]} arr 
 * @returns {number[]} 
 */
function processArray(arr) { 
    return arr.map(number => {
        if (number % 2 === 0) 
        {
            return number * number; 
        } 
        else 
        {
            return number * 3; 
        }
    });
}

const originalArray = [1, 2, 3, 4, 5, 6];
const processedArray = processArray(originalArray);

console.log("Original array:", originalArray);
console.log("Processed array:", processedArray);
