// // //2
const add = (a,b) => {
    return a + b
}
console.log(add(3,4));
console.log(add(10,15));


//1
const square = (n) => (n * n)
console.log(square(7));


// //3

const number = [1,2,3,4,5]
const squared = number.map(num => num * num)
console.log(squared);

// // //4

const num = [3, 8, 12, 5, 19, 7, 15];
const bigNums = num.filter(num => num > 10)
console.log(bigNums);

// //5

const nums = [10,20,30,40]
const total = nums.reduce((acc, num) => acc+num, 0)
console.log(total);

//6 object destructering
const user = { name: 'Rahul', age: 24, city: 'Bengaluru' };

const {name, age, city} = user
console.log(name);
console.log(age);
console.log(city);

//7 array destructuring

const colors = ['red', 
    'green', 
    [
        'blue',
        'purple',
    ],
     'yellow'];
const [...args] = colors

const copy=[...colors];

console.log("colors :",colors)

copy[2][0]="orange";
copy[0]="blue"

console.log("colors",colors)

console.log("copy",copy)


// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);


//8. spread operator

const a = [1, 2, 3];
const b = [4, 5, 6];

const merged = [...a,...b]
console.log(merged);

//9 merge objects

const defaults = { theme: 'light', lang: 'en', fontSize: 14 };
const userSettings = { theme: 'dark', fontSize: 16 };

const config = {...userSettings,...defaults}
console.log(config);

//10
function makeCounter() {
    this.count = 0;
    this.increment=function(){
         return ++this.count;
    };
}

const counter = new makeCounter()
console.log(counter.increment()) 
console.log(counter.increment()) // 2
console.log(counter.increment()) // 3






