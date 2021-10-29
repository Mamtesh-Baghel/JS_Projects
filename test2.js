console.log("Hello js")

var a =2;
console.log(a);
function test(){
    console.log("from function", a)
    let d = 2;//scope of d var is to inside of this function only.we can't call it outside of it.
}
var c = 3;
// var is globally defined (var has block scope)
// let is restricted to its local scope only
// console.log("value of d is: ", d)
if(c == 3){
    let w = 3;
    console.log("w is: ", w)
}
test();