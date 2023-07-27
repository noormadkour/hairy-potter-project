export const firePottery = (clayObject, fireTemp) => {
  if (fireTemp > 2200) {
    clayObject.cracked = true;
  } else if (fireTemp <= 2200) {
    clayObject.cracked = false;
  }
  clayObject.fired = true;
  return clayObject
};
