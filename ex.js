// let a = 10;
// function scope(){
  
//   if(true){
//     var a =15;
//   }
//   console.log(a);
// }
// console.log(a);

// scope();

//함수 복습



//          매개변수
function sum(x , y){
 return x+y;
}

//(인수)
const a = sum(4,5);
const b = sum(4,13);


console.log(a)
console.log(sum(5,103,34,325));
console.log(a+b)


//익명 함수

let sum1 = function(x,y){
  if(x > 2){
    return 
  }
  console.log(x);
  return x+y;
}

console.log(sum1(100,200));





function sum2(x){
  console.log(x);
  console.log(arguments)
  return arguments[0] + arguments[1];
}

console.log(sum2(7,3));


console.log('==========================')

//화살표 함수 
// () => {}  vs function (){} 

const double = function(x){
  return x * 2
}

console.log('double : ',double(7));

const doubleArrow = (x) => {
  return {jaejin:'이재진'}
}

console.log('doubleArrow : ',doubleArrow());

//객체 데이터 반환시에는 괄호로 묶어야함 
x=> ({name:'jaejin'})


console.log('==========================')

//즉시 실행 함수
const c = 6;

let double_ = () =>{
  console.log(2*2);
}
double_();


//익명의 함수 즉시 실행 
(function(){
  console.log(c*2);
})();


(function(){
  console.log(c*10);
})()



//호이스팅 





