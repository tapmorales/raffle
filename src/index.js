//passei para lib/ sort
// module.exports.sort = (min = 0, max = 10) =>
//   parseInt(Math.random() * (max - min + 1) + min);

const { sort } = require('./lib/sort');
module.exports.sort = sort;
//OU
// module.exports = { sort: sort };
//OU
// module.exports = { sort };
