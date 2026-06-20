// // let a = 10

// // function outer(){
// //     let b = 20

// //     function inner(){
// //         let c = 210
// //         console.log(c);
// //         console.log(b);
// //         console.log(a);
        
// //     }
// //     inner()
// // }
// // outer()


// // function a(){
// //     var b = 10

// //     c()
// //     function c(){
// //         console.log(b);
        
// //     }
// // }
// // a()

// // console.log(z);

// // let z = 10


// // console.log(x);

// // const x = 20
// //in tdz let and const variable are hoisted when i00

// //find the largest number

// function findLargest(arr){
//     let largest = arr[0]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }
// console.log(findLargest([3, 7, 2, 9, 4]));


// //Write a function countVowels(str) that counts

// function countVowels(str){
//     let count = 0
//     let vowels = "aeiou"
    
//     for(let i = 0; i < str.length; i++){
//         if(vowels.includes(str[i])){
//             count++
//         }
//     }
//     return count
// }
// console.log(countVowels('hello'));
// console.log(countVowels('nin akkan'));


// // Reverse a string

// function reverseString(str){
//     let reversed = ''
//     for(let i = str.length-1; i>=0; i--){
//         reversed+= str[i]
//     }
//     return reversed
// }
// console.log(reverseString('nin amman'));
// console.log(reverseString('ad est marithya meri'));


function countVowel(str){
    let count = 0
    let vowels = 'aeious'

    for(let i = 0; i < str.length; i++){
        if(vowels.includes(str[i])){
            count++
        }
    }
    return count
}
console.log(countVowel('ashwin'));

function removeDuplicates(arr) {
    let duplicate = []

    for(let i = 0; i < arr.length; i++){
        if(!duplicate.includes(arr[i])){
            duplicate.push(arr[i])
        }
    }
    return duplicate
}
console.log(removeDuplicates([1,2,3,2,4,3,5]))
