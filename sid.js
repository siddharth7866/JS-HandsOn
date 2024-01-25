// // 'use strict';

// // let moviesPass=false

// // let ticket=true
// // if(ticket) moviePass=true

// // if(moviesPass) console.log('I can watch movie')

// // let sid=[1,2,3,4]
// // let result=sid.forEach((x)=>console.log(x+5))
// // console.log(result)
// // let filterr=sid.filter(x=>x===4)
// // console.log(filterr)
// // let reducee=sid.reduce((x,y)=>(x+y))
// // console.log(reducee)

// // try {
// //     // let a =10
// //     console.log(a)
// // } catch (sid) {
// //     console.log(sid)
// //     console.log("I am in catch block")
// // }finally{
// //     console.log("I am in finally block")
// // }

// // var letters='abc'
// // console.log(letters.match(/s/))

// // console.log("Local personal system")

// // let incr=document.getElementById("xx")
// // let counter=document.getElementById("cc")
// // console.log(counter)
// // console.log(incr)

// // function vishen() {
// //     console.log("Siddharth Vishen")
// //     // counter+=1
// //     document.document.getElementById("cc").innerHTML=counter

// // }
// // incr.addEventListener("click",vishen)


// function SiddAdd(a,b) {
//     if (typeof(a)===typeof(8) && typeof(b)===typeof(7)) {
//         console.log(a+b)
//     } else {
//         console.log("Arguments are not Number data type")
//     }
// }


// SiddAdd(3,4)

// if (typeof(3)==typeof(4)) {
//     console.log("true condition")
// } else {
//     console.log("False")
// }


// function logged(a) {
//     return `${a} logged in`
// }

// let gp=logged("sid")
// console.log(gp)
// function calculateamount(val1,val2,...num1) {
//     return num1
// }

// console.log(calculateamount(200,300,21,456,299,123,234))

// let sid={
//     age:30,
//     location:"GKP",
//     interest:"Computer Science"
// }

// console.log(sid.age)
// console.log(sid["pet"]="Dog")
// console.log(sid)



// // function returnlast(getarray) {
// //     let leng=getarray.length
// //     console.log(getarray[leng-1])
// // }

// // returnlast(sidarr)

// // sidarr.push("Sidd")
// // console.log(sidarr)
// // console.log(sidarr.includes(200)
// // )
// // const newarjoin=sidarr.join()
// // console.log(newarjoin)
// //Differnce between splice and slice-------interview question
// //slice does not change original array whereas splice changes original array
// const sidarr=[200,300,212,453,7,543,457,211]
// const visarr=["abc","cbv","xyz"]
// sidarr.shift(3)
// sidarr.shift(3)
// console.log(sidarr)
// let xz=sidarr.concat(visarr)
// console.log(xz)
// sidarr.push(visarr)
// console.log(sidarr)
// const arr2=[1,2,3,4,[1,3,22,11],5,6,7,8,9,[11,22,33,44,99],90,12]
// const newarr2=arr2.flat(Infinity)
// console.log(newarr2)

// console.log(Object.values(sid))
// // Important topic in Array from,isarray,flat object conversion in array of keys or values
// console.log(Object.keys(sid))
// console.log(Object.values(sid))
// console.log(sid['age'])

// const sidsym=Symbol("myke1")

// const visid={
//     name:"Siddharth",
//     age:30,
//     techstack:"MERN",
//     [sidsym]:"mykey1"
// }

// console.log(visid[sidsym])
// // Object.freeze(visid)
// // visid.name="Vishen"
// console.log(visid)


// //one of the most asked topics in the interview is symbol data type

// visid.greeting=function() {
//     console.log(`hi user ${this.name}`)
// }

// visid.greeting()
// //singleton object in javascript

// const clg={z:'3',x:'6'}
// const school={a:'1',b:'2'}
// console.log(Object.assign(clg,school))
// console.log(clg)
// const vishen={...clg,...school}
// console.log(vishen)
// const xx=[1,2,3,4,5,6]
// const qq=['dog','cat','cammel']

// console.log([...xx,...qq])
// //Object destructuring
// const {age}=visid
// console.log(age)

// console.log(addxx(4))
// function addxx(num) {
//     return num+1
// }

// // Array Specific Loop for of and foreach

// for (const k of qq) {
//     console.log(k)
// }

// //use of continue and break statement in the loop 
// const 

// const sid={name:"sid",age:23,name:"siddd"}
// console.log(sid)
// const sidmap=new Map()
// sidmap.set('sid',"names")
// sidmap.set('gopi',"names")
// console.log(sidmap)
// const clg={z:'3',x:'6'}
// for (const [key] of sidmap) {
//     console.log(key)
// }

// const {age}=sid
// console.log(age)


// for (const key in sid) {
//     console.log(`${key} `)
        
//     }

// const zzz=["a","b","e","4","1","8","22"]
// for (const key in zzz) {
//     console.log(key)
        
//     }

// for (const key in sidmap) {
   
//         console.log(key) 
//     }


// //In higher order function we have to check that what are the paremeters they are having,this will demonstrate your true capability

// const xzx=["we","aw","qa","dc"]

// xzx.forEach((item)=> {
//     console.log(item+'a')
// })

// const asd=xzx.map((x)=>x+2)
// console.log(asd)

// const qaq=["a",'qw','we','ds','kj','lk']
// qaq.forEach(function (item) {
//    console.log(`${item} is good`)
// })
// // console.log(qaq)
// const xzx=["we","aw","qa","dc"]
// xzx.forEach((item,sid,vis)=>(console.log(item,sid,vis)))
// console.log(xzx)
// console.log(xzx.map((item)=>item+3))

// const vc=[49,23,43,12,56,78,34,98,100]

// for (let i = 0; i < vc.length; i++) {
//     const element = vc[i];
//         if (element>50) {
//             return false;
//         }
//     console.log(element)
    
// }


// function isPrime(num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//     //   return false;
//     }
//   }
//   return num > 1;
// }

// console.log(array.filter(isPrime))

// const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
// array.forEach(function (num) {
//     if (num>5) {
//         console.log(num)
//     }
// })

// const sidz=array.filter((x)=>x>5)
// console.log(sidz)
// const books=[
//     {tittle:"premchand",gener:"science",price:230},
//     {tittle:"premprabhu",gener:"Maths",price:40},
//     {tittle:"pppzx",gener:"geography",price:900},
//     {tittle:"psswx",gener:"history",price:110},
//     {tittle:"preczz",gener:"history",price:203},
//     {tittle:"shakespear",gener:"biology",price:123},
// ];

// const price=books.filter((x)=>x.price>100);
// const history=books.filter((x)=>x.gener==="geography")
// console.log(history)

// console.log(price)

// const marks=[15,18,17,16,13,18,14]

// const passed=marks.map((x)=>x+5).filter((x)=>x>=20)
// console.log(passed)
// const totalprice=books.reduce((acc,item)=>acc+item.price,-1000)
// console.log(totalprice)

// const promiseone=new Promise(function(resolve,reject) {
//     setTimeout(function () {
//         console.log("Async task is completed")
//         resolve()
//     },2000)
// })

// promiseone.then(function () {
//     console.log("Promise Consumed")
// })

// const promisethree=new Promise(function (resolve,reject) {
//     setTimeout(function () {
//         resolve({username:"Siddharth",class:"Tech",number:786})
//     },1000)
// })

// promisethree.then(function (user) {
//     console.log(user)
// })

const promisefour=new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log("I am in async call")
        let error=true
        if (error!=true) {
            resolve({username:"Siddharth",password:123456})
        }else{
            reject("Error:Something went wrong")
        }
    },1000)
})

async function promisefive() {
    const sid=await promisefour
    console.log(sid)
}

promisefive()

// promisefour.then((user)=>{
//     console.log(user)
//     return user.username
// }).then((username)=>{
//     console.log(username)
// }).catch((error)=>{
//     console.log(error)
// }).finally(()=>{
//     console.log("It will print in any case either resolved or reject")
// })
