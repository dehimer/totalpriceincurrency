const getProp = (obj, propName) => (obj[propName]);
const getPrice = (obj => getProp(obj, 'price'));
const sum = (numberA, numberB) => (numberA + numberB);

module.exports = {
  getProp: getProp,
  getPrice: getPrice,
  sum: sum
};