function duplicate(arr){
    let result = []

    for(let i = 0; i <arr.length; i++){
        if(!result.includes(arr[i])){
            result.push(arr[i])
        }
    }
    return result
}
console.log(duplicate([1,1,2,3,10,16,10,16]));


function removeDuplicate(str){
    let result = ''

    for(let i = 0; i < str.length; i++){
        if(!result.includes(str[i])){
            result += str[i]
        }
    }
    return result
}
console.log(removeDuplicate(['k', 'a', 'a', 'v', 'y', 'a']));

function remDup(arr){
    return [... new Set(arr)]
}
console.log(remDup([1,2,3,4,5,6,6]));


function sumofDigit(n){
    let sum = 0
    let digit = n.toString().split('')

    for(let i = 0; i < digit.length; i++){
        sum += Number(digit[i])
    }
    return sum
}
console.log(sumofDigit(123));


//remove duplicate

function removeDuplicates(arr) {
    return [...new Set(arr)]
}

console.log(removeDuplicates([1,2,3,2,4,3,5])) 
console.log(removeDuplicates(['a','b','a','c']))
