const greet = (name) => {
  return `Hello, ${name}!`;
};

// Single expression arrow function (implicit return)
const add = (a, b) => a + b;

// Arrow function with no parameters
const getCurrentTime = () => new Date().toLocaleTimeString();

// Arrow function with single parameter (parentheses optional)
const square = x => x * x;

export { greet, add, getCurrentTime, square };

