let start=function (){
    return new Promise(resolve => {
    let v=slowMath.add(1,4)
    resolve(v)
})}
let step1=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v1=slowMath.multiply(num,2)
    resolve(v1)})
}
let step2=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v2=slowMath.divide(num,4)
    resolve(v2)})
}
let step3=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v3=slowMath.subtract(num,3)
    resolve(v3)})
}
let step4=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v4=slowMath.add(num,98)
    resolve(v4)})
}
let step5=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v5=slowMath.remainder(num,2)
    resolve(v5)})
}
let step6=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v6=slowMath.multiply(num,50)
    resolve(v6)})
}
let step7=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v7=slowMath.remainder(num,40)
    resolve(v7)})
}
let step8=function (num) {
    return new Promise(resolve => {
    console.log(num)
    let v8=slowMath.add(num,32)
    resolve(v8)})
}
let step9=function (num) {
    tex=`The final result is ${num}.`
    console.log(tex)
}
let err=new Error("somthing went wrong")
start().then(num=>step1(num))
.then(num=>step2(num))
.then(num=>step3(num))
.then(num=>step4(num))
.then(num=>step5(num))
.then(num=>step6(num))
.then(num=>step7(num))
.then(num=>step8(num))
.then(num=>step9(num))
.catch(err)
//with inital logged 42
//async math encounters an issue when the value is negative
//the chain stops