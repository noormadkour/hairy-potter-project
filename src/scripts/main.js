// Imports go first
import { makePottery } from "./makePottery.js";
import { firePottery } from "./kiln.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("mug", 2, 5);
let platter = makePottery("platter", 5, 7);
let tumbler = makePottery("tumbler", 3, 3);
let ringHolder = makePottery("Ring Holder", 4, 6);
let paperweight = makePottery("Paperweight", 8, 4);

firePottery(mug, 2230);
firePottery(platter, 2200);
firePottery(tumbler, 2150);
firePottery(ringHolder, 2201);
firePottery(paperweight, 2190);

console.log(mug);
console.log(platter);
console.log(tumbler);
console.log(ringHolder);
console.log(paperweight);


// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
