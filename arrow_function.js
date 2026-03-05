// this is a universal style for declaring function
function chai(username) {
    return `Name: ${username}`
}

// this is arrow function declaration as per ES6, explicitly return
const chaiArrow = (username) => {
    return `Name: ${username}`
}

// console.log(chaiArrow('Ashish'))

const implicitlyArrow = (username) => `Name : ${username}`;

// console.log(implicitlyArrow('Jayant'))

/*
* There are two ways to declare the arrow function
* 1- Implicitly return
*       - inline or oneline function without return keyword and curly braces
*       - const addTwo = (num1, num2) => num1 + num2;
* 2- Explicitly return
*       - traditional way to declare
* */


// by the help of arrow function (this) get point to lexical parent means to the current object context but by the traditional function this get changed in function within function as an example.,

// traditional way
const userInfo = {
    name: 'Jayant',
    showInfo: function () {
        // here it will point to current object
        // console.log(this)
        let currentThis = this;
        setTimeout(function () {
            // at this point this can't get referenced to the object userInfo and output comes Name is undefined and referencing to setTimeout object
            // so to overcome from this situation and don't want to lose the current object, store the current context to another variable
            // console.log(this)
            // console.log(`Name is ${this.name}.`)
            console.log(`Name is ${currentThis.name}.`)
        }, 2000)
    },
    withArrowShowInfo: function () {
        // in this way this cant get changed
        // console.log(this)
        setTimeout(() => {
            console.log(this)
            console.log(`Name is ${this.name}.`)
        }, 2000)
    }
}

userInfo.showInfo()
userInfo.withArrowShowInfo()