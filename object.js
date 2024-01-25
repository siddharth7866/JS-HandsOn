


// alert("connected with object file")

const sid={
    username:"Siddharth",
    DOB:"6 feb",
    job:"Software Developer",
    getname:function () {
        console.log(`I am ${this.username}`)
    }
}

console.log(sid.getname())


function User(nameis,ageis,loggedin) {
    this.nameis=nameis;
    this.ageis=ageis;
    this.loggedin=loggedin
    return this

}

const sidd= new User("siddharth",30,true)
const viss= new User("Rahul",40,false)

console.log(viss.nameis)

//Instance of of object


