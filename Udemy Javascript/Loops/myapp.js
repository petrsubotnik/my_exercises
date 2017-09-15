var classRegister = ["Lawrence", "John", "Jeff"];

//increment
/*for (var i = 0; i < classRegister.length; i++) {
  console.log(classRegister[i]);
}*/

//decrement
/*for (var i = classRegister.length -1; i >= 0; i--) {
  console.log(classRegister[i]);
}*/

//shorter version of increment
for (var index in classRegister) {
  console.log(classRegister[index]);
}
