const fs = require("fs");
const { parse } = require("csv-parse");

const convertCSVtoObject = (fileName) => {
  return new Promise((resolve, reject) => {
    const fileList = [];

    fs.createReadStream(fileName)
      .pipe(parse({ delimiter: ";" }))
      .on("data", (row) => {
        const data = {
          fileName: row[0],
          tags: row[1].split(":"),
        };

        fileList.push(data);
      })
      .on("end", () => {
        return resolve(fileList);
      })
      .on("error", (e) => {
        return reject(e);
      })
  });
}

module.exports = { convertCSVtoObject };