const assert = require("assert");
const { greet } = require("./greet");

assert.strictEqual(greet("Claude"), "Hello, Claude!");

console.log("All tests passed.");
