//sync and async code
/*
*sync code-the exicution of code will be in sync. means exicution will be as per the order of calling.
eg. function1 = 2sec , function2 = 3sec , function3 = 4sec;
functions will exicute one by one
total time of exicution of code = 2+3+4
                                = 9sec

*async code-the exicution of code will be in parallel. means it will be exicuted irrespective of order of calling.
*it will be exicuted as per the time provided.
eg. function1 = 2sec , function2 = 3sec , function3 = 4sec;
all functions start exicuting at same time
total time of exicution of code = 4sec

therefore async function is better for time management.

*/


//1 - sync 
function addA(){
    console.log("Add A")
}

function addB(){
    console.log("Add B")
}

function addC(){
    console.log("Add C")
}

//will be exicuted as per order of calling
// addC()
// addA()
// addB()


//2 - async

function additionA(){
    setTimeout(function(){
        console.log("A is exicuted with 3000ms")
    },3000)
}

function additionB(){
    console.log("B is exicuted")
}

// additionA()
// additionB()

//irrespective of calling A first B is exicuted first as there is parallel exicution.


//callback hell

//in some cases we have async code as showen below
function getUsers(){
    setTimeout(function(){
        console.log("User Created")
    },3000)

    setTimeout(function(){
        console.log("User get ID")
    },2000)
    setTimeout(function(){
        console.log("Get info from ID")
    },1000)
}
// getUsers()

//the above case is of an async code but our requirement is sync code
//this can be achive with callback hell

function getUser(){
    setTimeout(function(){
        console.log("User Created")
        setTimeout(function(){
            console.log("User Get ID")
            setTimeout(function(){
                console.log("Get Info From ID")
            },1000)
        },2000)
    },3000)
}

// getUser()

//But callback hell looks complicated to understand
//so we use Promises

let pro = new Promise(function(resolve,reject){
    let a = 25;
    let b = 5;
    if(a%b===0){
        resolve("Completly Divisible")
    }
    else{
        reject("Not Divisibal")
    }
})

//using then  ***
/*
syntax
pro.then(fn1(){
    statements
},
fn2(){
    statements
})
*/


// pro
// .then(function(res){
//     console.log(res)
// },function(rej){
//     console.log(rej)
// })



//using then and catch ***
/*
resolved state goes in then block and 
reject state goes in catch block
*/

// pro.then(function(res){
//     console.log(res)
// })
// .catch(function(rej){
//     console.log(rej)
// })


//using then, catch and finally
/*
resolved state goes in then block and 
reject state goes in catch block
And 
finally block will always exicuted irrespective of resolve or reject
*/

// pro
// .then(function(res){
//     console.log(res)
// })
// .catch(function(rej){
//     console.log(rej)
// })
// .finally(function(){
//     console.log("Finally exicutes always")
// })



//chain of then *******
/*
if first then block returns anything it will be consumed in the next then block
*/

// pro
// .then(function(res){
//     console.log(res)
//     return 25*36;
// })
// .then(function(re){
//     console.log("I have return something from previous then block, this is " + re)
// })
// .catch(function(rej){
//     console.log(rej)
// })
// .finally(function(){
//     console.log("Finally exicutes always")
// })


//solving callback hell with promises

function creatUser(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("User Created")
        },3000)
    })
}


function userGetId(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("User got his ID")
        },2000)
    })
}

function getInfoById(){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            resolve("Get info from usres ID")
        },1000)
    })
}

// creatUser()
// .then(function(creat){
//     console.log(creat);
//     return userGetId()
// })
// .then(function(get){
//     console.log(get);
//     return getInfoById()
// })
// .then(function(info){
//     console.log(info)
// })
// .catch(function(){
//     console.log("Error Occured")
// })
// .finally(function(){
//     console.log("Sucsessfull")
// })



//this also look time consuming to write many then blocks
//so we can use async - await
//in async-await functions are wating for exicution of previous function

async function getUserInfo(){
    let a = await creatUser()
    console.log(a)
    let b = await userGetId()
    console.log(b)
    let c = await getInfoById()
    console.log(c)
}

getUserInfo()