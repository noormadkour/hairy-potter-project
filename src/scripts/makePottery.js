let id = 1;

export const makePottery = (shape, weight, height) => {
  let clayObject = { id: id, shape: shape, weight: weight, height: height };
  id++;
  return clayObject;
};
