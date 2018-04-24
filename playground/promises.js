const somePromise= new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('Hey, it worked')
        reject('Unable to fullfil the promise')
    },  2500);
    
});

somePromise.then((message)=>{
    console.log("Success: ", message)
},(errorMessage)=>{
    console.log("Error :", errorMessage)
})

//async promise with user input 
const asyncAdd=(a,b)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(typeof a=== 'number' && typeof b==='number'){
                resolve(a+b);
            }else {
                reject('Arguments must be numbers');
            }
        },1500)
    })
}

asyncAdd(9,7).then((res)=>{
    console.log("Result: " , res);
    return asyncAdd(res, 33);
}).then((res)=>{
    console.log("New sum: ", res);
}).catch((errorMessage)=>{
    console.log(errorMessage);
});