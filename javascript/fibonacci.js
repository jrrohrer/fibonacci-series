function fibonacci(num) {
  if (num < 2) { return num }
  let fib = [0, 1]
  for (i = 0; i < num - 1; ++i) {
    let total = fib[0] + fib[1]
    fib = [fib[1], total]
  }
  return fib[1]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("Expecting: 144");
  console.log("=>", fibonacci(12))

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
  // if num is less than 2, return num (this accounts for num being 0 or 1)
  // initialize fib array with 0 and 1
  // create a for loop that iterates up to the value of num
  // create a total variable that stores the values of the fib array added together
  // reset the fib array with new values: the 2nd number from the previous version, and the value of total
  // return the second value from the fib array
// And a written explanation of your solution
  // Account for num being 0 or 1 by returning num back to the console. Create an array to hold the current 2 values of the fibonacci sequence we're working with. Create a for loop that iterates up to the value of num minus 1 ( to account for 0 indexing) and add the two values in the the array together. Reset the array with the 2nd original value and the new total value. Do this until the index is 1 less than num, then return the total.