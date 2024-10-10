// const {dollar, yen} = require("./number.js");
// console.log(dollar, yen);

const app = require("./number.js");
const convert = require("./func.js");

//console.log(app.dollar, app.yen);
convert.dollarConvert(app.dollar);
convert.yenConvert(app.yen);
