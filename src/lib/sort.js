module.exports.sort = (min = 0, max = 10, integer = true) => {
  let r = Math.random() * (max - min + 1) + min;

  return integer ? parseInt(r) : r;
};
