const mocha = require("mocha");
const chai = require("chai");
const utils = require("../utils");
const expect = chai.expect;
const assert = chai.assert;

// ========================================================
// NOTE: https://mochajs.org/#arrow-functions
// Passing arrow functions (“lambdas”) to Mocha is discouraged.
// Lambdas lexically bind this and cannot access the Mocha context.
// ========================================================

it("should say hello", function() {
  const hello = utils.sayHello();
  expect(hello).to.be.a("string");
  expect(hello).to.equal("Hello");
  expect(hello).with.lengthOf(5);
});

// ========================================================
// Level 1 Challenges
// ========================================================

it("should return the area of a 5 by 6 rectangle", function() {
    const rectArea = utils.area(5, 6);
    expect(rectArea).to.be.a("number");
    expect(rectArea).to.be.equal(30);
    assert.isNumber(rectArea);
});

it("should return the area of a circle of radius 5", function() {
    const circArea = utils.circleArea(5);
    expect(circArea).to.be.a('number');
    expect(circArea).to.be.equal(Math.PI*5*5);
});

// ========================================================
// Level 2 Challenges
// ========================================================
// NOTE: The following unimplemented test cases are examples
// of "Pending Tests" in Chai. Someone should write these
// tests eventually.
// ========================================================

it("Should create a new (object) Item with name and price", function() {
    const item = new Object();
    item.name = 'nachos';
    item.price = 15;
    expect(item.name).to.be.a('string');
    expect(item.name).to.be.equal('nachos');
    expect(item.price).to.be.a('number');
    assert.isNumber(item.price);
    expect(item.price).to.be.equal(15);
});

it("Should return an array containing all items in cart", function() {
    const nachos = new Object()
    const beer = new Object()
    const array = [nachos, beer];
    expect(array).to.be.a('array');
    expect(array[0]).to.be.a('object');
});

it("Should add a new item to the shopping cart");

it("Should return the number of items in the cart");

it("Should remove items from cart");

// ========================================================
// Stretch Challenges
// ========================================================

it("Should update the count of items in the cart");

it("Should remove an item when count is 0");

it("Should return the total cost of all items in the cart");
