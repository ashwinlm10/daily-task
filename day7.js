// closure

function x(){
    var a = 10
    function y(){
        console.log(a);
    }
    return y
}

var z = x()
console.log(z);
z()

// closure + setTimeout

function x(){
    for(var i = 1; i <=5; i++){
        setTimeout(function ()  {
           console.log(i) 
        }, i * 1000);
    }
    console.log('hello from the frontend');
    
}
x()

// counter using closure


function outer(){
    let count = 0

    return function(){
        count++
        console.log(count);
    }
}

const increment = outer()
increment()
increment()
increment()

//  2. Closure with setTimeout

function greet(name){
    setTimeout(function(){
        console.log("hello" + name);
        
    }, 2000);
}
greet("ashwin")

for (var i = 1; i <= 5; i++) {
    function close(x) {
        setTimeout(() => {
            console.log(x);
        }, 1000);
    }

    close(i);
}

// delayed counter
function delayedCounter(){
    for(var i=1; i<=5;i++){
        setTimeout(function(){
            console.log(i);  
        },i*1000);
    }
}
delayedCounter()

function test() {
    let x = 10;

    setTimeout(function() {
        console.log(x);
    }, 1000);

    x = 20;
}

test();


function outer(){
    let count = 0

    function inner(){
        count++
        return count
    }
    return inner
}
const counter = createCounter()
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());


counter using closures
function createCounter(){
    let count = 0

    return{
        increment: function(){
            count++
            return count
        },

        decrement: function(){
            count--
            return count
        },

        reset: function(){
            count = 0
            return count
        }
    }
}

const counter = createCounter()
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.increment());
console.log(counter.increment())
console.log(counter.reset());

number to string

function numberToString(num) {
  return num.toString()
}
console.log(numberToString(123))

function boolToWord( bool ){
    if(bool){
        return 'Yes'
    }else{
        return 'false'
    }
}
console.log(boolToWord(true));
console.log(boolToWord(false));


function countBy(x, n) {
  let z = [];

    for(let i = 1; i <=n; i++){
        z.push(x*i)
    }
    
  return z;
}
console.log(countBy(5, 4));



