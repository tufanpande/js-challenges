/* Write a JavaScript function that accepts a string as a 
parameter and counts the number of vowels within the string. 
Note : As the letter 'y' can be regarded as both a vowel and a consonant, 
we do not count 'y' as vowel here. Example string : 'The quick brown fox' Expected Output : 5

*/
//=============================================================================================================
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char) && char.toLowerCase() !== 'y') {
            count++;
        }
    }

    return count;
}


const exampleString = 'The quicke brown fox';
const result = countVowels(exampleString);
console.log(result); 

//=======================================================================================================
