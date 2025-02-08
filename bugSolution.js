function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed'); // Throw error for null values
  }
  return a + b;
}

//Alternative solution using Nullish Coalescing Operator
function foo2(a, b) {
  return (a ?? 0) + (b ?? 0); //Use default values if null
}

console.log(foo2(null, 5)); // Output: 5
console.log(foo2(5, null)); // Output: 5
console.log(foo2(5, 5)); // Output: 10
console.log(foo2(0, 5)); // Output: 5

//Example of throwing an error:
try{
    console.log(foo(null,5));
}catch(e){
    console.error("Error:",e.message);
}

