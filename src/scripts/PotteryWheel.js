let id = 1;

export const makePottery = (shape, weight, height) => {
  let clayObject = { shape: shape, weight: weight, height: height, id: id };
  id++;
  return clayObject;
};
