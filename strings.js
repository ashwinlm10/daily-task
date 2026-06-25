//1. Convert "hello world" to uppercase

let string = "hello world"
console.log(string.toUpperCase());

//Find the length of "JavaScript"
let str = "javascript"
console.log(str.length);

//Check if "banana" contains "nan"
let string1 = "banana"
console.log(string1.includes("nan"));

//Replace "cat" with "dog" in "I have a cat"
let sentence = "I have a cat"
console.log(sentence.replace("cat", "dog"));

//Split "red,green,blue" into an array
let color = "red,greeen, blue"
console.log(color.split(","));

//Reverse the string "hello"
let string2 = "hello"
console.log(string2.split('').reverse("").join(""));

//Capitalize the first letter of "ashwin"
let name = "ashwin"
let result = name.slice(0,3)+
name.charAt(3).toUpperCase()+
name.slice(4)
console.log(result);



//Count how many times "a" appears in "banana"
let string4 = 'banana'
let count = 0
for(let i=0;i<=string4.length;i++){
    if(string4[i] === 'a'){
        count++
    }
}
console.log(count);


//1. Count the number of vowels in "javascript"
let string6 = "apple"
let vowel = "aeiou"
let vowelCount = 0

for(let i = 0; i < string6.length; i++){
    if(vowel.includes(string6[i])){
        vowelCount++
    }
}
console.log(vowelCount);
