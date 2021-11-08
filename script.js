let array = ["Banana", "Apples", "Oranges", "Blueberries"];


//Some array methods()

// list.shift(); Deletes first data in an Array
// list.pop();  Deletes last data in an Array
// list.push("elephant"); Add data to end of an Array. Needs argument.
// let newArray = list.concat(["bee", "deer"]); Merge an Array with list Array to an new Array
// list.sort(); Sorts Array.


// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// Remove Banana
array.shift();

// Sort Array
array.sort();

// Add "Kiwi" to the end of Array
array.push("Kiwi");

// Remove Apples
array.shift();

// Sort Array reverse

array.reverse();

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".

let array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
array2[1][1][0]; // access "Oranges"