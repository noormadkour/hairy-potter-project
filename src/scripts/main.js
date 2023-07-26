// Imports go first
import { makePottery } from "./makePottery.js";
import { firePottery } from "./kiln.js";
import { toSellOrNotToSell, usePottery } from "./potteryCatalog.js";
import { potteryList } from "./potteryList.js";

// Make 5 pieces of pottery at the wheel
let mug = makePottery("Mug", 7, 5);
let platter = makePottery("Platter", 9, 7);
let tumbler = makePottery("Tumbler", 5, 3);
let ringHolder = makePottery("Ring Holder", 4, 6);
let paperweight = makePottery("Paperweight", 8, 4);

firePottery(mug, 2230);
firePottery(platter, 2200);
firePottery(tumbler, 2150);
firePottery(ringHolder, 2201);
firePottery(paperweight, 2190);

toSellOrNotToSell(mug);
toSellOrNotToSell(platter);
toSellOrNotToSell(tumbler);
toSellOrNotToSell(ringHolder);
toSellOrNotToSell(paperweight);

const itemsForSale = usePottery();

const htmlString = potteryList(itemsForSale)

let parentHtmlElement = document.querySelector(".PotteryList");

parentHtmlElement.innerHTML = htmlString;

// console.log(mug);
// console.log(platter);
// console.log(tumbler);
// console.log(ringHolder);
// console.log(paperweight);

// console.log(htmlString)

// Fire each piece of pottery in the kiln

// Determine which ones should be sold, and their price

// Invoke the component function that renders the HTML list
