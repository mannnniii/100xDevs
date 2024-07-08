const firstname = "Mani"
// console.log(firstname.length);

// indexOf,lastIndexOf

function findIndexof(str, target){
  console.log("Orginal String:", str);
  console.log("index:", str.lastIndexOf(target));
}
findIndexof("Hello World World World","World")

// slice ,substr ,replacestring

let username = "manikanta mani"
str_val= username.slice(2,5)
sub_val = username.substr(2,5)
console.log(str_val);
console.log(sub_val);
console.log(username.replace("manikanta","rocking"));

const val = "hi my name is manikanta"
const words = val.split(",");

console.log(words);

let valname = "  Shiva Kumar Reddy    "
console.log(valname.trim());
console.log(valname.toUpperCase())
console.log(valname.toLowerCase());
