function findSum(n){
  let ans = 0;
  for (let i =1; i<n; i++){
    ans =ans +i;
  }
  return ans;
}
let ans = findSum(100)
// console.log(ans);


function addSum(a,b){
  return a+b;
}

let sum = addSum(2,3)
// console.log(sum);



// find the square of the input
function square(n) {
  return n * n;
}

// find the sum of the squres of the inputs
function sumOfSquares(a, b) {
  const val1 = square(a)
  const val2 = square(b)

  return val1 + val2;
}

console.log(sumOfSquares(1, 2));


