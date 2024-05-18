/**
 * Creates user profiles from an array of original names and an array of modified names.
 *
 * @param {string[]} originalNames 
 * @param {string[]} modifiedNames 
 * @returns {Object[]} 
 */
function createUserProfiles(originalNames, modifiedNames) {
    
    if (originalNames.length !== modifiedNames.length) {
        throw new Error("Both arrays must have the same length");
    }

    
    const userProfiles = originalNames.map((originalName, index) => {
        return {
            id: index + 1,
            originalName: originalName,
            modifiedName: modifiedNames[index]
        };
    });

    return userProfiles;
}


const originalNames = ["Alice", "Bob", "Charlie", "David", "Eve"];
const modifiedNames = ["alice", "BOB", "charlie", "DAVID", "eve"];
const userProfiles = createUserProfiles(originalNames, modifiedNames);

console.log("User profiles:", userProfiles);