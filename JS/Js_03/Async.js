function findSum(n){
  let ans = 0;
  for (let i=1; i<n; i++){
    ans += i;
  }
  return ans;
}

function findSumTill100(){
  console.log(findSum(100));
}

setTimeout(findSumTill100,2000)
console.log("hello world");

