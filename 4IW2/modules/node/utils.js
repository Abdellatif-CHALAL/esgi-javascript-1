exports.randomIntFromInterval = function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min) * 1000;
};

// Equivalent à =>
//module.exports = {
//  randomIntFromInterval:randomIntFromInterval
//}
