

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
   
   
    /**
 * Modifies an array of strings based on a corresponding array of numbers.
    *
    * @param {string[]} stringArray 
    * @param {number[]} numberArray
    * @returns {string[]} 
    */
   function formatArrayStrings(stringArray, numberArray) {
       if (stringArray.length !== numberArray.length) {
           throw new Error("Both arrays must have the same length");
       }
   
       
       return stringArray.map((str, index) => {
           const number = numberArray[index];
           if (number % 2 === 0) {
               return str.toUpperCase(); 
           } else {
               return str.toLowerCase(); 
           }
       });
   }
   

const originalArray = [1, 2, 3, 4, 5, 6];
const processedArray = processArray(originalArray);
const stringArray = ["One", "Twenty", "Fifteen", "Four", "Five", "Six"];
const formattedStrings = formatArrayStrings(stringArray, processedArray);

console.log("Original array:", originalArray);
console.log("Processed array:", processedArray);
console.log("Original strings:", stringArray);
console.log("Formatted strings:", formattedStrings);
