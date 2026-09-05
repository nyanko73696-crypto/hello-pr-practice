const assert = require("assert");
const { greet } = require("./greet");

assert.strictEqual(greet("Claude"), "Hello, Claude!");
assert.strictEqual(greet(), "Hello, world!");

console.log("All tests passed.");
