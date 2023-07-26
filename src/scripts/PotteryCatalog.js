const saleArray = [];

export const toSellOrNotToSell = (clayObject) => {
    if (clayObject.weight >= 6 && clayObject.cracked === false){
        clayObject.price = 40;
        saleArray.push(clayObject);
    } else if (clayObject.weight < 6 && clayObject.cracked === false) {
        clayObject.price = 20;
        saleArray.push(clayObject);
    }
}

export const usePottery = () => {
    return saleArray
}