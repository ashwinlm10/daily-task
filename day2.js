//9
function analyzeText(Str){
    const trim = Str.trim()
    const uppercase = trim.toUpperCase()
    const words = uppercase.split(' ')
    return words.length
}
console.log(analyzeText('  hello world  '));

//11
const company = {
    name: 'TechCorp',
    location: 'Bengaluru',
    employee: {
        name: 'ashwin',
        salary: 21000
    }
}
console.log(company.employee.name);
console.log(company.employee.salary);

//10
function getResult(score){
    let result = score>=50 ? 'Pass' : 'Fail'
    return result
}
console.log(getResult(60));
console.log(getResult(40));

const products = [
    { name: 'Phone', price: 15000 },
    { name: 'Laptop', price: 55000 },
    { name: 'Tablet', price: 25000 },
];

let expensive = products[0]
for(let i = 1; i < products.length; i++){
    if(products[i].price > expensive.price)
        expensive = products[i]
}
console.log(expensive.name);

//13

function greetUser(name, greeting = 'Hello'){
    return `${greeting} ${name}`
}
console.log(greetUser('Rahul'));
console.log(greetUser('Priya', 'Hi'));

//14
function getDayName(num){
    switch(num){
        case 1: return 'Monday'
        case 2: return 'Tuesday'
        case 3: return 'Wednesday'
        case 4: return 'Thursday'
        case 5: return 'Friday'
        case 6: return 'Saturday'
        case 7: return 'Sunday'
        break
    }
}
console.log(getDayName(1));
console.log(getDayName(5));

//15
const students = [
    { name: 'Rahul', grade: 'A' },
    { name: 'Priya', grade: 'B' },
    { name: 'Amit', grade: 'A' },
    { name: 'Sara', grade: 'C' },
];

const result = students
.filter(students => students.grade === 'A')
.map(students => `${students.name} has ${students.grade}`)
console.log(result);
