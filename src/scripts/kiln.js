export const firePottery = (clayObject, fireTemp) => {
  clayObject["fired"] = true;
  if (fireTemp > 2200) {
    clayObject["cracked"] = true;
  } else if (fireTemp <= 2200) {
    clayObject["cracked"] = false;
  }
};
