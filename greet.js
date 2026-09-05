function greet(name) {
  if (!name) {
    return "Hello, world!";
  }
  return `Hello, ${name}!`;
}

console.log(greet(process.argv[2]));

module.exports = { greet };
