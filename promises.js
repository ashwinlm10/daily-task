const myPromises = new Promise((resolve, reject) => {
    resolve('Task completed')
})
myPromises.then(result => console.log(result))



    function wait(){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve('Done')
            }, 1000);
        })
    }


wait().then(result => console.log(result))

// async function orderFood() {
//         console.log('Placing Order');

//         const order = await Placeorder('Pizza')
//         console.log('ordering Food', order);
        
//         const deliver = await waitingDelivery()
//         console.log('ordered delivered', deliver);
        
//         console.log('you can eat now');
        
// }

function getData() {
    return new Promise((resolve) => {
        resolve('Hello async world!')
    })
}

// Write async function that awaits getData() and logs result
async function showData() {
    const result = await getData()
    console.log(result);  
}
showData()

async function getUser() {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/1")
    const data = await res.json()
    console.log(data.name);
    
}
getUser()

async function safeDivide(a, b) {
    if(b === 0) {
        throw new Error('Cannot divide by zero')
    }
    return a / b
}

async function runDivide() {
    try {
        const result = await safeDivide(10, 0)
        console.log(result)
    } catch(error) {
        console.log(error.message);
        
    }
}
runDivide()