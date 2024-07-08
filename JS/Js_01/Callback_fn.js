// find the square of the input
function square(n) {
  return n * n;
}
function cube(n) {
  return n * n * n;
}

function sumOfSquares(a, b) {
  const val1 = square(a)
  const val2 = square(b)

  return val1 + val2;
}

function sumOfCubes(a, b ) {
  const val1 = cube(a)
  const val2 = cube(b)

  return val1 + val2;
}

const squreOf = sumOfSquares(1, 2)
const cubesOf = sumOfCubes(2,3)

console.log(squreOf);
console.log(cubesOf);


function Square(a){
 return a * a
}

function sumOfSomething(a,b,fn){

const val1 = fn(a);
const val2 = fn(b);
return val1 +val2;
}

// let ans = sumOfSomething(2,2, Square)

// console.log(ans);


//Anonymous functions

function sumOfSquares(a,b,callback){
  console.log(a);
  const val1 = callback(a);
  const val2 = callback(b);
  return val1 + val2;
}

const ans = sumOfSomething(2,3,function square(n){
  return n * n * n ;
})

console.log(ans);