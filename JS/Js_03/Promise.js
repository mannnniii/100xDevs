const fs = require("fs");
const { resolve } = require("path");

function KiratsReadFile(){
  console.log("inside kiratResdFile");
  return new Promise (function(resolve){
    console.log(a);
fs.readFile("a.txt", "utf-8" ,function (err,data){
  console.log("before resolve");
  resolve(data)
})
  })
}
function isDone(data){
  console.log(data);
}

var a = KiratsReadFile()
a.then(isDone)


// explain -2

var b = new Promise(function(resolve){
  resolve("foo");
})

function callback(){
  console.log(b);
}

b.then(callback)
