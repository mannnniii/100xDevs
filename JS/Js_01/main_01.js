// arrys of objects

const allusers =[{
  firstname:"mani",
  gender:"male"
},{
  firstname: "shiva",
  gender: "male"
},{
  firstname: "supriya",
  gender: "female"
}]

for (let i=0; i<allusers.length; i++){
  if(allusers[i]["gender"] == "male"){
    // console.log(allusers[i]["firstname"]);
  }
}

// functions
function sum(num1,num2,fnTocall){
let result = num1  +num2;
fnTocall(result);
}

function displayResult(data){
  console.log("Result of the sum is:",data);
}

function displayResultPassive(data){
console.log("Sum's result is :" , + data);
}

// you are only allowed to call one function after this
// How will you displayResult of a sum

const ans = sum(1,2,displayResult);
// callbacks

function greet(){
  console.log("hello");
}

setTimeout(greet,3*1000)

setInterval(() => {
  
}, interval);