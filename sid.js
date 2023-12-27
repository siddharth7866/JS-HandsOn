// 'use strict';

// let moviesPass=false

// let ticket=true
// if(ticket) moviePass=true

// if(moviesPass) console.log('I can watch movie')

let sid=[1,2,4,4,5,6,7,8,9]
let result=sid.forEach((x)=>console.log(x+5))
console.log(result)
let filterr=sid.filter(x=>x===4)
console.log(filterr)
let reducee=sid.reduce((x,y,z)=>console.log(z+y))
console.log(reducee)
