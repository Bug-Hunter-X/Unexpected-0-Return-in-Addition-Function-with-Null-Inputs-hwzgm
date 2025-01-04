function foo(a, b) {
  //Solution 1: using a ternary operator to provide a more explicit default value when a null value is encountered
  const aVal = a === null ? 0 : a; 
  const bVal = b === null ? 0 : b; 
  return aVal + bVal; 
}

function fooErrorHandling(a,b){
  if(a === null || b === null){
    throw new Error("Null values are not allowed");
  }
  return a + b;
}
console.log(foo(1, 2)); // Output: 3
console.log(foo(null, 2)); // Output: 2
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0

console.log(fooErrorHandling(1,2)); //Output: 3
//console.log(fooErrorHandling(null,2)); //Throws an error
//console.log(fooErrorHandling(1, null)); //Throws an error
//console.log(fooErrorHandling(null, null)); //Throws an error