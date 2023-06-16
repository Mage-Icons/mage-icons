

const capitalCamelCase = (name) => {
  let fileName = "";
  const splitName = name.split(" ");

  for(const caseName of splitName) {
    const tempName = caseName[0].toUpperCase() + caseName.substring(1, caseName.length).toLowerCase();
    fileName += tempName;
  }

  return fileName;
}

module.exports = { capitalCamelCase };