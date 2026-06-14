// function findSmallest(arr){
//     let smallest = arr[0]

//     for(let i = 0; i < arr.length ; i++){
//         if(arr[i] < smallest){
//             smallest = arr[i]
//         }
//     }
//     return smallest

// }
// console.log(findSmallest([22,54,33,11,45]));

// function largestNumber(arr){
//     let largest = arr[0]

//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > largest){
//             largest = arr[i]
//         }
//     }
//     return largest
// }

// let n = 4

// function square(num){
//     let ans = num * num
//     // return ans
// }

// console.log(square(n));

function makeCounter() {
    let count = 0
    return function() {
        count ++
         return count
    }
}

const counter = makeCounter()
console.log(counter()) // 1
console.log(counter()) // 2
console.log(counter()) // 3
