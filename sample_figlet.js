var figlet = require("figlet");

figlet("Hello World!!",
  {
    font: "Ghost",
    horizontalLayout: "default",
    verticalLayout: "fitted",
    width: 180,
    whitespaceBreak: true,
  }, function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});