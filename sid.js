// 'use strict';

// let moviesPass=false

// let ticket=true
// if(ticket) moviePass=true

// if(moviesPass) console.log('I can watch movie')

// let sid=[1,2,3,4]
// let result=sid.forEach((x)=>console.log(x+5))
// console.log(result)
// let filterr=sid.filter(x=>x===4)
// console.log(filterr)
// let reducee=sid.reduce((x,y)=>(x+y))
// console.log(reducee)

// try {
//     // let a =10
//     console.log(a)
// } catch (sid) {
//     console.log(sid)
//     console.log("I am in catch block")
// }finally{
//     console.log("I am in finally block")
// }

// var letters='abc'
// console.log(letters.match(/s/))

// console.log("Local personal system")

// let incr=document.getElementById("xx")
// let counter=document.getElementById("cc")
// console.log(counter)
// console.log(incr)

// function vishen() {
//     console.log("Siddharth Vishen")
//     // counter+=1
//     document.document.getElementById("cc").innerHTML=counter

// }
// incr.addEventListener("click",vishen)


function SiddAdd(a,b) {
    if (typeof(a)===typeof(8) && typeof(b)===typeof(7)) {
        console.log(a+b)
    } else {
        console.log("Arguments are not Number data type")
    }
}


SiddAdd(3,4)

if (typeof(3)==typeof(4)) {
    console.log("true condition")
} else {
    console.log("False")
}


function logged(a) {
    return `${a} logged in`
}

let gp=logged("sid")
console.log(gp)
function calculateamount(val1,val2,...num1) {
    return num1
}

console.log(calculateamount(200,300,21,456,299,123,234))
