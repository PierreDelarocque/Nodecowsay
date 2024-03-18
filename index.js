const information = require("./information");
const cowsay = require("cowsay");
console.log(
  cowsay.say({
    text: `Hi, my name is ${information.name} from ${information.campus}`,
    e: "oO",
    T: "U ",
  })
);
