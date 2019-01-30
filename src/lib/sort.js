module.exports.sort = (min = 0, max = 10) =>
  parseInt(Math.random() * (max - min + 1) + min);
