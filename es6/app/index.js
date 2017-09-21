// function bang() {
//   console.log("3..2..1..bang!");
// }

// setTimeout(() => {
//   console.log("3..2..1..bang");
// },1000);

// const bang = () => {
//   console.log("3..2..1..bang!!!");
// }
//
// bang();

/////////////////////////////////////////////////////////

// this.a = 25;
//
// let print = function(){
//   this.a = 50;
//   console.log('this.a', this.a);
// }
// print();
//
// let arrowPrint = () =>{
//   console.log('this.a with arrow function', this.a);
// }
// arrowPrint();

/////////////////////////////////////////////////////////

// let points = [10,20,30];
//
// // let addOne = function(element){
// // let addOne = (element) => {
// //   return element + 1;
// // }
//
//
// // points = points.map(element => {
// //   return element +1;
// // });
// points = points.map(element => element +1);
//
// console.log(points);

/////////////////////////////////////////////////////////

// let lengths = [3, 7, 5];
// let multiple = 8;
//
// // const scale = (multiple) => {
// //   return lengths // todo fill out the rest;
// // };
//
// const scale = (multiple) => {
//   return lengths.map(el => el * multiple)
// };

////////////////////////////////////////////////////////

// import { students,total } from './students';
// console.log(students, total);

////////////////////////////////////////////////////////

import { add, multiply } from './calculator';
console.log(multiply(3,5));
