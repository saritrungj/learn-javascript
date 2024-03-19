// try { } = encloses code that might potentially cause an error
// catch { } = catch and handle any thrown erroes from try {}
// finally { optional } = Always executes. Used mostly for clean up ex. close files, close connections, release resources

try {
  console.log('Hello');
  // NETWORK ERRORS
  // PROMISE REJECTION
  // SECURITY ERRORS

} catch (error) {
  console.error(error);
} finally {
  // CLOSE FILES
  // CLOSE CONNECTIONS
  // RELEASE RESOURCES
  console.log('This always executes');
}
console.log('You have reached the end!');


try {
  const dividend = Number(prompt('Enter a dividend: '));
  const divisor = Number(prompt('Enter a divisor: '));
  if (divisor === 0) {
    throw new Error('You cant divide by zero!');
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error('Value must be a number');
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}

console.log('You have reached the end!');