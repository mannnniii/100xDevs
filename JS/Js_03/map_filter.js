// given an array give me back a new array in which every valuenis multiplied by 2
// [1,2,3,4,5]
// [2,4,6,8,10]

const input = [1,2,3,4,5];

// solution
// const newArray = [];

// for(let i = 0; i< input.length; i++){
//   newArray.push(input[i]*2)
// }

// console.log(newArray);

// using map
function transform(i){
return i * 2
}

// let ans = input.map(transform);
// console.log(ans);

// filter
// what if i tell u ,given an input array,given me back all the even values from it.
let arr = [1,2,3,4,5]


let newArray = [];

for(let i = 0; i<input.length; i++){
  if (arr[i] % 2 == 0) {
    newArray.push(arr[i])
  }
}

// console.log(newArray);
// console.log(arr);

// using filter
function filterLogic(n){
if(n % 2 == 0){
  return true
} else{
  return false
}
}

const ans = arr.filter(filterLogic)
console.log(ans);