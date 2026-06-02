const greet = (name) => 'hello ' + name
console.log(greet('ashwin'));


const score = 0
score = 10
console.log(score);

const firstname = 'Priya'
const lastname = 'Sharma'

const fullname = `${firstname} ${lastname}`
console.log(fullname);

function isEven(n){
    if(n %2 === 0){
        return true
    }else{
        return false
    }
}
console.log(isEven(4));
console.log(isEven(7));

function oneToTen(){
    const result = []
    for(let i = 1; i <=10; i++){
        result.push(i)
    }
    return result
}
console.log(oneToTen());

let fruits = ['apple', 'banana', 'mango', 'orange']
fruits.push('kiwi')
fruits.shift()
console.log(fruits);

function countdown(n){
    const result = []

    while(n>=1){
        result.push(n)
        n--
    }
    return result
}
console.log(countdown(5));

const student = {
    name: 'Amit',
    age: 20,
    grade: 'A',
    introduce(){
        return `I am ${this.name}, age ${this.age}, grade ${this.grade}`
    }
}
console.log(student.introduce());



