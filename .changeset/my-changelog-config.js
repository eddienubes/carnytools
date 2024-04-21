async function getReleaseLine(...args) {
  console.log(args);
  return "123";
}

async function getDependencyReleaseLine(...args) {
  console.log(args);
  return "1234";
}

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
