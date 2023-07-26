
export const potteryList = (clayObjectArray) => {
    let htmlString = "";
    for (const clayObject of clayObjectArray){
        htmlString += `
        <section class="pottery" id="pottery--${clayObject.id}">
            <h2 class="pottery__shape">${clayObject.shape}</h2>
            <div class="pottery__properties">
            ${clayObject.shape} weighs ${clayObject.weight} grams and is ${clayObject.height} cm in height
            </div>
            <div class="pottery__price">Price is $${clayObject.price}</div>
        </section>
        `
    }
    return htmlString
}

