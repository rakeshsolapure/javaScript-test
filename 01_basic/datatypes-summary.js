// primitive

// 7 types : String,number,Boolean,null, undefined,Symbol,BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsdideTemp= null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 12412872176174127n

//Reference (Non Primitive)

//Array, Object, Functions

const heros = ["shaktiman","naagraj", "doga"];
let obj = {
    name: "rakesh",
    age:22,
}

const myFunction = function(){
    console.log("hello");
}

// console.log(myFunction);


// ------------------------------------------------------------------------

 // Stack (Primitive), Heap(Non- Primitive)

 let myYoutubename = "RakeshSolapure.com"
 let anothername = myYoutubename
 anothername = "chaiourRakesh"

 console.log(myYoutubename);
 console.log(anothername);


 let userOne = {
    email : "rakesh.com",
    upi: "user@ybl"
 }

 let userTow = userOne

 userTow.email = "rakesh@google.com"

 console.log(userOne.email);
 console.log(userTow.email);


