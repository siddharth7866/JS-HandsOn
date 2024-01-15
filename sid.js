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

let sid={
    age:30,
    location:"GKP",
    interest:"Computer Science"
}

console.log(sid.age)
console.log(sid["pet"]="Dog")
console.log(sid)



// function returnlast(getarray) {
//     let leng=getarray.length
//     console.log(getarray[leng-1])
// }

// returnlast(sidarr)

// sidarr.push("Sidd")
// console.log(sidarr)
// console.log(sidarr.includes(200)
// )
// const newarjoin=sidarr.join()
// console.log(newarjoin)
//Differnce between splice and slice-------interview question
//slice does not change original array whereas splice changes original array
const sidarr=[200,300,212,453,7,543,457,211]
const visarr=["abc","cbv","xyz"]
sidarr.shift(3)
sidarr.shift(3)
console.log(sidarr)
let xz=sidarr.concat(visarr)
console.log(xz)
sidarr.push(visarr)
console.log(sidarr)
const arr2=[1,2,3,4,[1,3,22,11],5,6,7,8,9,[11,22,33,44,99],90,12]
const newarr2=arr2.flat(Infinity)
console.log(newarr2)

console.log(Object.values(sid))
// Important topic in Array from,isarray,flat object conversion in array of keys or values
console.log(Object.keys(sid))
console.log(Object.values(sid))
console.log(sid['age'])

const sidsym=Symbol("myke1")

const visid={
    name:"Siddharth",
    age:30,
    techstack:"MERN",
    [sidsym]:"mykey1"
}

console.log(visid[sidsym])
// Object.freeze(visid)
// visid.name="Vishen"
console.log(visid)


//one of the most asked topics in the interview is symbol data type

visid.greeting=function() {
    console.log(`hi user ${this.name}`)
}

visid.greeting()
//singleton object in javascript

const clg={z:'3',x:'6'}
const school={a:'1',b:'2'}
console.log(Object.assign(clg,school))
console.log(clg)
const vishen={...clg,...school}
console.log(vishen)
const xx=[1,2,3,4,5,6]
const qq=['dog','cat','cammel']

console.log([...xx,...qq])
//Object destructuring
const {age}=visid
console.log(age)

console.log(addxx(4))
function addxx(num) {
    return num+1
}

