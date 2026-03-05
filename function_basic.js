/*
* (...) is an rest operator which is used when there are many arguments to pass in function
* rest operator returns an array
* */
function cartPrice(...items) {
    return items
}

// console.log(cartPrice(100, 200, 300, 400))

function cartPriceWithDifferentValues(val1, val2, ...items) {
    return items
}

/*
* in the below function call whatever first two arguments they are val1 and val2 and rest of all goes to items parameter
* */

// console.log(cartPriceWithDifferentValues(100, 200, 300, 400))

const user = {
    username: 'Ayush',
    mobile: 1212121212,
    address: 'sample'
}

//function with object as an argument
function printUserInfo(object) {
    return `${object.username}, is live at ${object.address} and "${object.mobile}" is his contact number.`
}

console.log(printUserInfo(user))