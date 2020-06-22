// 'use strict';
// Import stylesheets



///////////////////22.06.2020////////////////////////////

///////////////Scope in Javascript//////////////////////
// var a=10;                         //scope A

// var add5=function(num){       
//   var b=5;                        //scope B 
  
//   console.log(num+b);

//   var add10=function(num2){       //scope C
//   console.log(num2+a);
//   };

//   add10(3);

//   var add15=function(num3){       //scope D
//     var c=15;
//     console.log(num3+c);
//   };
//   add15(3);
// };
// add5(3);

////////////////////var vs let////////////////////////////
//  var funct1=function(){
//    console.log("1: "+ x);
//  };
//  funct1();
// let x=10;

// var funct2=function(){
//   for(let i=1;i<5;i++){
//     console.log(i);
//   }
//   console.log(i);
// }
// funct2();
////////////using strict//////////
//"use strict";
// var test=function(i2, i2){
// var x=3.14;
// var obj={
//   y: i2
// }
// Object.defineProperty(obj,"y",{writable: false});
// obj.y=100;
// console.log(obj.y);
// };
// test(90,110);
/////////DECLARATION////
// const outer=function(){
//   for(let i=1;i<=3;i++){
//     inner();
//   }
// };
// const inner=function(){
// for(let i=1;i<=5;i++){
//   console.log(i);
// }
// };
// outer();

///////use strict//////
// const oops=function(){  
//  var haha=2;
//   console.log(haha);
// };
// oops();
// console.log(haha);

// ///EXERCISE 1 //sum of primes
// 'use strict';