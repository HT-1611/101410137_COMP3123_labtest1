// lowerCaseWords.js
function lowerCaseWords(arr) {
    return new Promise((resolve, reject) => {
        try {
            // Filter out non-strings and lowercase the strings
            const filteredWords = arr.filter(item => typeof item === 'string')
                                     .map(word => word.toLowerCase());
            resolve(filteredWords);
        } catch (error) {
            reject(error);
        }
    });
}

// Example usage
const mixedArray = ['PIZZA', 10, true, 25, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result))  // Output: ['hello', 'world', 'javascript']
    .catch(error => console.log(error));
