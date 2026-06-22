//1. Create a function which answers the question "Are you playing banjo?".If your name starts with the letter "R" or lower case "r", you are playing banjo!

function areYouPlayingBanjo(name) {
    if(name[0] === "R" || name[0] === 'r'){
        return `${name}  playes play banjo`
    }else{
        return `${name}  not play banjo`
    }
  return name;
}
console.log(areYouPlayingBanjo('ashwin'));

// 2. Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. 
// You can ignore any need to sanitize words or add punctuation,  but you should add spaces between each word. 
// Be careful, there shouldn't be a space at the beginning or the end of the sentence!

function smash(words){
  return words.join(' ')
}
console.log(smash(['hello', 'world', 'this', 'is', 'great']))

//3. if n or m is lessthan 0 return 0 else n * m

function paperwork(n, m) {
  if(n < 0 || m < 0){
    return 0
  }else{
    return n * m
  }
}
console.log(paperwork(2, 2))

// 4. You get an array of numbers, return the sum of all of the positives ones.
// [1, -4, 7, 12] => 1 + 7 +12 = 20
function positiveSum(arr) {
  let sum = 0
  for(let i = 0; i < arr.length; i++){
    if(arr[i] > 0){
        sum += arr[i]
    }
  }
  return sum
}
console.log(positiveSum([1, -4, 7, 12, 22]));


function century(year) {
  return Math.ceil(year/100);
}
console.log(century(3015))

//Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.


function countPositivesSumNegatives(input) {
    if(input === 0 || input.length === null){
        return []
    }
    let sum = 0
    let count = 0

    for(let i = 0; i < input.length; i++){
        if(input[i] > 0){
            count++
        }else if(input[i] < 0){
            sum += input[i]
        }
    }
    return[count, sum]
};
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]));


//Write function RemoveExclamationMarks which removes all exclamation marks from a given string.


function removeExclamationMarks(s) {
  return s.replaceAll('!',"")
}
console.log(removeExclamationMarks("Hello world!!"))