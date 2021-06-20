//Create 2 object and try to use call, apply and bind on them

const obj1 ={
    name : "Abc",
    greet:function(a,b){
        sum=a+b;
        console.log("Hey this is " + this.name+ "\n sum is "+ sum);
    }
}

const obj2={
    name :" xyz"
}
console.log("this is normal call");
obj1.greet(10,20);

console.log("\n this is by call()");
obj1.greet.call(obj2,10,20)

console.log("\n this is by apply()");
obj1.greet.apply(obj2,[10,20])

console.log("\n this is by bind()");
const n = obj1.greet.bind(obj2,10,20)
n();