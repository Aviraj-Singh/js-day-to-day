// An array can hold values under a single name, and you can access the values by referring to an index.
let name = ['aviraj', 'vishal', 'kishan']
console.log(name);

// accessing an element - index; index starts with 0
console.log(name[0]);

// Important Array Methods:

// 1. Finding the length
const array_length = name.length;
console.log(array_length);

// 2. Converting to string
let new_string = name.toString()
console.log(new_string);

let string_2 = name.join('|');
console.log(string_2);

/* 
The key difference between toString() and join() is that join() comes with 
additional parameter - separator
*/

// 3. Push and Pop 
name.pop();
console.log(name); // pops out the last element

name.push('kishan');
console.log(name); // adds an element at the end

// 4. Shift and Unshift
name.unshift('mahto');
console.log(name); // adds new element at the beginning of the array
name.shift();
console.log(name); // removes the first element from the array

// 5. Splicing and Slicing
name.splice(2,0, 'mahto') // 2 here is the index, 0 is no. of items to remove, 'mahto' is the item added
console.log(name) // alters the original array

name.splice(2,1)
console.log(name) // removed 1 item from index 2 of name

// name.slice(0,2) slices out the element from index 0 to 1 (2 is excluded)

/* 
It is not always good to alter the original array, so we prefer toSpliced instead of splice which does
the same work as splice but without altering the original array
*/

let name2 = name.toSpliced(2,0,'mahto');
console.log(name, name2);

/* 6. 
i) name.includes('aviraj) - returns true if aviraj is present in name, else returns false
ii) name.indexOf('aviraj) - return the index of first appearence of aviraj
iii) name.reverse() - reverses out the array
iv) let name3 = name.toReversed() - returns a new array name3 with reversed items
*/

/* 
Sorting method in JavaSccript works alphabetically. It is good with numbers but not with digits
*/

let fruit_list = ['apple', 'orange', 'mango', 'guava', 'banana'];
fruit_list.sort();
console.log(fruit_list); // return [ 'apple', 'banana', 'guava', 'mango', 'orange' ]

let number_list = [2,5,1,9,10,32];
number_list.sort();
console.log(number_list); // the output here will be [ 1, 10, 2, 32, 5, 9 ]

// In order to sort numbers using this method with do this - 
number_list2 = [2,5,1,9,10,32];
number_list2.sort(function(a,b){return a-b}) // for ascending sorting, for descending do return b-a
console.log(number_list2); // here we get the desired output [ 1, 2, 5, 9, 10, 32 ]