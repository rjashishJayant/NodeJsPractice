// there are two ways to declare object

// singleton
// Object.create(); // via constructor as new Object();

const SingletonObject = new Object();
// console.log(typeof SingletonObject);


// literal, and below is an example

const BasicInfo = {
    'name': 'jayant', 'full name': 'Jayant Ashish', 'workplace': 'kanpur', 'console': function () {
        console.log(`${this.name} is work at ${this.workplace}`)
    }
}

/**
 *ways to access the object property
 * - $BasicInfo.name
 * - $BasicInfo["full name"], because sometimes properties will be with space and we have to access it
 * */
// BasicInfo.console()
// console.log(BasicInfo.name)
// console.log(BasicInfo["full name"])


// to check, objects in object

const OptionalChaining = {
    'IsLoggedIn': false,
    'full name': {
        'first_name': 'Jayant',
        'last_name': 'Ashish'
    }
}

// in below console "?." is showing the optional chaining which means if (first_name) the property exist in objects then it get reflects otherwise nope
// console.log(OptionalChaining["full name"]?.first_name)

/**
 * to merge the objects, there are two methods:
 * - by using Object.assign(target({empty object}), sources(obj1, obj2))
 * - by using spread operator(...obj1, ...obj2)
 * */

const byObjectMergedObjects = Object.assign({}, BasicInfo, OptionalChaining);
const bySpreadMergedObjects = {...BasicInfo, ...OptionalChaining};
// console.log(byObjectMergedObjects);
// console.log(bySpreadMergedObjects);

/**
 * to get the keys, values and key, values from the Object
 * - use Object.keys(obj1) => returns all keys in array,
 * - use Object.values(obj1) => returns all values in array,
 * - use Object.entries(obj1) => returns all keys and values in array,
 * */

// console.log("Keys : " + Object.keys(BasicInfo))
// console.log("Values : " + Object.values(BasicInfo))
// console.log("Keys, Values : " + Object.entries(BasicInfo))
//
// BasicInfo.email = 'ashish@gshgs.sss';
// console.log("Keys, Values : " + Object.entries(BasicInfo))
// console.log('is object frozen: ' + Object.isFrozen(BasicInfo))
// Object.freeze(BasicInfo)
// BasicInfo.email = 'jayant@gshgs.sss';
// console.log("unchanged email : " + BasicInfo.email)
// console.log('is object frozen: ' + Object.isFrozen(BasicInfo))

const Course = {
    courseName: 'Chai aur Code',
    price: 999,
    CourseInstructor: 'Hitesh',
}

/**
 * Destructuring the objects
 * --------------------------
 * suppose that we have to use the CourseInstructor many times then we have to write it as
 * Course.CourseInstructor many times
 * so making this repetition
 * destruct the object as
 * */

const {CourseInstructor} = Course
const {courseName: course} = Course

/*
* const {courseName: instructor}
* in this courseName is a property of object and if we want to make ir short for use then use "instructor"*/
console.log(CourseInstructor)
console.log(course)



