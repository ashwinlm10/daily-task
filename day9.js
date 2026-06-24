//S1 — Count specific characterjs
 // Write a function countChar(str, char) that counts 
// how many times a specific character appears in a string

function countChar(str, char) {
    let count = 0
    for(let i = 0; i < str.length; i++){
        if(str[i] == char)
            count++
    }
    return count
}

console.log(countChar('banana', 'a'))    // 3
console.log(countChar('javascript', 's')) // 2
console.log(countChar('hello', 'z')) 

//closure + setTimeout

// function x(){
//     for(let i = 0; i <= 5; i++){
//         setTimeout(function(){
//             console.log(i);
//         }, 1000);
//     }
//     console.log('namaste sir');
// }
// x()

//closure + setTimeout with var not let to print 1,2,3,4,5,6


function x(){
    for(var i=1;i<=5;i++){
        function close(i){
            setTimeout(function(){
                console.log(i);
            }, i*1000)
        }
        close(i)
    }
    console.log('namaste'); 
}
x()