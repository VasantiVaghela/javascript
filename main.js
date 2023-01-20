
// const fruits = ['Apple','cherry','banana','lichi','grapes'];  // Original array

//Adding and Removing an element at either end of an Array: (RETURN VALUE : item or new length)

//PUSH
// fruits.push('watermelon');
// console.log(fruits);

//POP
// fruits.pop('watermelon');
// console.log(fruits);

//UNSHIFT
// fruits.unshift('watermelon')
// console.log(fruits);

//SHIFT
// fruits.shift('watermelon')
// console.log(fruits);

// let numbers = [1,2,3];
// numbers.unshift(numbers.pop())    //INTERESING OUTPUT
// console.log(numbers)

// -------------------------------------------------------------------------------

//Changing all of an Array (the input Array is modified and return)

//FILL
// fruits.fill('Wiki')
// console.log(fruits);


//FILL
// let numbers = new Array(4);
// numbers.fill(1)
// console.log(numbers)


//FILL
// let numbers = new Array(4);
// const friends = [];
// friends[4] = '';
// console.log(friends.fill('vasu'))
// console.log(numbers.fill(1).map((val,idx) => idx))


//REVERSE
// let numbers = [1,2,3];
// console.log(numbers.reverse())

//SORT
// let numbers = [3,5,1,6,7,9];
//console.log(numbers.sort())                 //acsending order
// console.log(numbers.sort((a,b) => b-a))    //desending order


//COPYWITHIN
// let shapes = ['square','triangle','circle','diamond'];
// console.log(shapes.copyWithin(1,2,3))

// --------------------------------------------------------------------------------------

//Creating a new Array from an existing Array:
// const fruits = ['Apple','cherry','banana','lichi','grapes'];

//SLICE
// console.log(fruits.slice(1,3))

//SPLICE
// console.log(fruits.splice(1,2,'strawberry'))    //makes new array also modifies the original array
// console.log(fruits);                            //modifies the array

//FILTER
// console.log(fruits.filter(fruit => fruit ==="lichi"))

//MAP
// console.log(fruits.map(fruit => fruit+' '+fruit))
// console.log(fruits.map(fruit => [fruit+' '+fruit]))

//FLATMAP
// console.log(fruits.flatMap(fruit => [fruit,fruit]))

//CONCAT
// console.log(fruits.concat(['watermelon','dragon-fruit']))

// ----------------------------------------------------------------------------------------

//Finding Array Elements

// const fruits = ['Apple','cherry','banana','lichi','grapes'];

//INCLUDES
// console.log(fruits.includes('lichi'))

//INDEXOF
// console.log(fruits.indexOf('Apple'))

//LASTINDEXOF
// console.log(fruits.lastIndexOf('Apple'))

//FIND
// console.log(fruits.find(fruit => fruit === 'lichi'))
// console.log(fruits.indexOf(fruits.find(fruit => fruit === 'lichi')))

//FINDINDEX
// console.log(fruits.findIndex(fruit => fruit ==='lichi'))

// -------------------------------------------------------------------------------------------

//Computing a summary of an Array

// const fruits = ['Apple','cherry','banana','lichi','grapes'];

//SOME
// console.log(fruits.some(fruit => fruit === 'Apple'))

//EVERY
// console.log(fruits.every(fruit => fruit === 'Apple'))

//JOIN
// let letter = ['a','p','p','l','e']
// console.log(letter.join(''))
// console.log(fruits.join(' '))

//REDUCE
// let numbers = [3,2,5,1,9];
// console.log(numbers.reduce((result, num) => result + num ,0))
// console.log(fruits.reduceRight((result, fruit) => result+' '+ fruit ,'orange'))
// console.log(fruits.reduceRight((result, fruit) => result+' '+ fruit ,))           // reverses the fruit array

// ----------------------------------------------------------------------------------------

//Listing elements

// const fruits = ['Apple','cherry','banana','lichi','grapes'];

//KEYS
// let iteratorOfKeys = fruits.keys()
// console.log(iteratorOfKeys)    
// for (let i of iteratorOfKeys ) {                     
//   console.log(i)
// }                      // iterating over value of iterator object using (for ... of)

//VALUES
// let iteratorOfValues = fruits.values()
// for (let i of iteratorOfValues ) {
//   console.log(i)
// }


//ENTRIES
// let iteratorOfEntries = fruits.entries()
// for (let i in iteratorOfEntries ) {
  // console.log(i)
// }

//OBJECT

const person = {
  name: 'vasanti',
  lastname: 'vaghela'
}

// iterate over object keys or proprties using (for ... in)

for (let key in person) {
  console.log(key)
}