async function getReleaseLine(...args) {
  console.log("HEY, RELEASE LINE");
  console.log("HEY, RELEASE LINE");
  console.log("HEY, RELEASE LINE");
  console.log("HEY, RELEASE LINE");
  console.log("HEY, RELEASE LINE");
  console.log(args);
  return "123";
}

async function getDependencyReleaseLine(...args) {
  console.log("HEY, DEP RELEASE LINE");
  console.log("HEY, DEP RELEASE LINE");
  console.log("HEY, DEP RELEASE LINE");
  console.log("HEY, DEP RELEASE LINE");
  console.log("HEY, DEP RELEASE LINE");
  console.log(args);
  return "1234";
}

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
