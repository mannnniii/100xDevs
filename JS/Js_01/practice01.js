// questions basics
// 1- greet by firstname and lastname

let firstname = "aman"
let lastname = "maxx"
// console.log('hello', firstname + "", lastname)

// 2- greet by age
let age = 18

if (age == 18) {
  // console.log("Welcome to Coding Adda");
} else {
  // console.log("please go from Coding Adda");
}

// 3- print 0-1000 using loops

// let ans=0;
for (let i = 0; i <= 1000; i++) {

  // console.log(i);
}

// Arrays and objects Que's

// Q-01
const ages = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

for (let i = 0; i < ages.length; i++) {
  if (ages[i] % 2 == 0) {
    // console.log(ages[i]);
  }
}

// q-02

let arr = [2,4,6,8,9];

let bignnum = arr[0]

for(let i=1; i < arr.length; i++){
  if(arr[i] > bignnum){
    bignnum = arr[i]
  }
}

// console.log(bignnum);


// q-03

const users = [{
  firstname : "shiva",
  gender: "male"},
{
firstname:"babitha",
gender:"female",
},
{
  firstname: "aman",
  gender: "male"
}
]

for(let i=0; i < users.length; i++){
  if(users[i].gender === "male"){
    // console.log(users[i].firstname);
  }
}

// q-04

let array = [1,2,3,4,5]

let reversearr = array.reverse();

// console.log(reversearr);

// functions ques

// q- 01

function addSum(a,b){
  return a + b;
}
let ans = addSum(1,2);

console.log(ans);

// q- 03
let array1 = [1, 2, 3, 4, 5];

let sum = calculateSum(array1);

printSumInPassiveTense(sum);

function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

function printSumInPassiveTense(sum) {
  console.log("The sum has been calculated: " + sum);
}









