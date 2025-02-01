
// what is polyfill
//  it fills the gap for missing features by mimicking how they work in newer JavaScript versions.

// properties
// create nee function when new function called
// this keyword to the first argument which is passed to the bind method


let nameObj1 = {
    name: "Tony"
}

let PrintName1 = {
    name: "steve",
    sayHi: function () {

        // Here "this" points to nameObj
        console.log(this.name); 
    }
}

let HiFun1 = PrintName.sayHi.bind(nameObj);
HiFun1();

//PrintName” has a function sayHi  will print the name of person
// =>  which  pass in the nameObj object.

// ====================================//

let nameObj = {
    name: "Tony"
}

let PrintName = {
    name: "steve",
    sayHi: function () {
        console.log(this.name);
    }
}

//  MyBind function with a parameter as bindObj in our case our bindObj is nameObj.
// adding myMethod inside nameObj and inside myMethod we are storing this. In our case, this is the sayHi function. 

Object.prototype.MyBind = function (bindObj) {

    // Here "this" will be sayHi function
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod();
    }
}
let HiFun = PrintName.sayHi.MyBind(nameObj);
HiFun();


// ================================== //

let nameObj2 = {
    name: "Tony"
}

let PrintName2 = {
    name: "steve",
    sayHi: function (age) {
        console.log(this.name + " age is " + age);
    }
}

Object.prototype.MyBind = function (bindObj, ...args) {
    bindObj.myMethod = this;
    return function () {
        bindObj.myMethod(...args);
    }
}
let HiFun2 = PrintName.sayHi.MyBind(nameObj, 42);
HiFun();

// put : Tony age is 42