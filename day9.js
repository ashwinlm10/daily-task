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

//