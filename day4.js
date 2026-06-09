// function generateAtoZ(){
//     let letters = []
//     for(let i = 65; i <=90; i++){
//         letters.push(String.fromCharCode(i))
//     }
//     return letters
// }
// console.log(generateAtoZ());
// module.export =  { generateAtoZ }

//make counter

// function makeCounter(intialValue = 0){
//     let counter = intialValue

//     function increment(){
//         counter++
//         return counter
//     }

//     function decrement(){
//         counter--
//         return counter
//     }

//     function reset(){
//         counter = intialValue
//         return counter
        
//     }

//     return {increment,
//     decrement,
//     reset
// }
// }

// const counter = makeCounter(5)
// console.log(counter.increment());
// console.log(counter.increment`());
// console.log(counter.decrement());
// console.log(counter.reset());
// console.log(counter.decrement());


function sumN(n){
    let sum = 0

    for(let i = 1;i <=n; i++){
        sum += i
    }
    return sum
}
console.log(sumN(1));



