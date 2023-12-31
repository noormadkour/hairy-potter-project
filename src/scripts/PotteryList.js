import { usePottery } from "./PotteryCatalog.js";


export const PotteryList = () => {
  let clayObjectArray = usePottery();
  let htmlString = "";
  for (const clayObject of clayObjectArray) {
    htmlString += `
    <section class="pottery" id="pottery--${clayObject.id}">
        <h2 class="pottery__shape">${clayObject.shape}</h2>
        <div class="pottery__properties">
          Item weighs ${clayObject.weight} grams and is ${clayObject.height} cm in height
        </div>
        <div class="pottery__price">Price is $${clayObject.price}</div>
    </section>`;
  }
  return htmlString;
};
