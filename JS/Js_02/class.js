class Animal{
  constructor(name,legCount,speaks){
    this.name =name;
    this.legCount = legCount;
    this.speaks = speaks;
  }
  static mytype(){
    console.log("Animal")
  }
  speak(){
    console.log("hi there " + this.speaks);
  }
  names(){
    console.log("hi there me " + this.name)
  }
}

console.log(Animal)

let dog = new Animal("dog",4,"bhow bhow")
let cat = new Animal("cat",4,"meow")
dog.speak()
cat.speak()
cat.names()