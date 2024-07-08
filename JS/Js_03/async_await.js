function kiratAsyncfunction(){
let p = new Promise(function(resolve){
  setTimeout( function(){
    resolve("hi there")
  },2000)
})
}

async function main(){
let val = await kiratAsyncfunction();
console.log("hi there!");
}

main();
console.log("after main");