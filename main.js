
//Object.assign() ---- copies properties from one or more source objects to target object

// let targetObject = {}
// Object.assign(targetObject,{ a: 1, b: 2 }, { c: 3 }, { d: 4 }) // { a: 1, b: 2, c: 3, d: 4 }
// console.log(targetObject);

// -------------------------------------------------------------------------------------------

//Object.create() ---- creates new object, using an existing object as the prototype
/*const person = {
  name: 'name',
  lastname: 'lastname',
  getFullName() {
    console.log(`My full name is ${this.name} ${this.lastname}`)
  }
}
const me = Object.create(person)

me.name = 'vasanti';
me.lastname = 'vaghela';
console.log(me);
me.getFullName(); */

// ----------------------------------------------------------------------------------------------
//Object.defineProperties() ---- defines new or modifies existing properties
/*const person = {
  name: 'name',
  lastname: 'lastname',
}
Object.defineProperties(person, {
  name: {
    value : 'vasanti',
    writable: true
  },
  lastname: {
    name: {
      value : 'vasanti',
      writable: true
    }
  }
});
console.log(person); */

// ------------------------------------------------------------------------------------------

// Object.defineProperty() ---- defines new or modifies existing property
/* let obj = {a: 1, b: 2};
Object.defineProperty(obj, 'a', {
  value: 3,
  writable: true
});

console.log(obj.a) */

// -----------------------------------------------------------------------------------------

// Object.entries() ---- returns array of object's [key, value] pairs

// console.log(Object.entries({ a: 1, b: 2 }))

// -------------------------------------------------------------------------------------------

//Object.fromEntries() ---- transforms a list of key-value pairs into an object

// console.log(Object.fromEntries([['a', 1], ['b', 2]]))

// ----------------------------------------------------------------------------------------

//Object.freeze(obj) ---- freezes an object, which then can no longer be changed

// -------------------------------------------------------------------------------------------

//Object.getOwnPropertyDescriptor() AND  Object.getOwnPropertyDescriptors()

// const obj = { a: 1 }
// console.log(Object.getOwnPropertyDescriptor(obj, 'a'))    //returns a property descriptor for an own property
// console.log(Object.getOwnPropertyDescriptors(obj, 'a'))   //returns all own property descriptors



// Object.getOwnPropertyNames() ---- returns array of all properties
console.log(Object.getOwnPropertyNames({ a: 1, b: 2 }))