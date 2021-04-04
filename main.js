//자바스크립트 import
import getType from './getType.js';
import random from './getRandom.js';

// #자바스크립트 외부 함수 import 해서 사용 
  // console.log('===================');
  // console.log(getType(123));
  // console.log(getType(false));
  // console.log(getType(null));
  // console.log(getType({}));
  // console.log(getType([]));
  // console.log('===================');

  // const a = random();

  // if(a===0){
  //   console.log('a is 0');
  // }else{
  //   console.log('a is 0이아님');
  // }


// #js활용 
  // const ulEl = document.querySelector('ul');
  // console.log(ulEl);

  // for (let i = 0; i<10; i++){
  //   const li = document.createElement('li');
  //   li.textContent = `사람 - ${i+1}`;

  //   if((i+1) % 2 == 0){
  //     li.addEventListener('click',function(){
  //       console.log(li.textContent);
  //     })
  //   }
  //   ulEl.append(li);
  // }



// #변수 유효범위(Variable Scope)
  // var, let, const
  // let,const 는 블럭레벨 ..(블록내에서만 유효한 범위를 가짐.)
  // var는 함수레벨(함수내에서 사용),의도하지 않은 범위내에서 사용 가능 할 수 있음.

  // function scope(){
  //   if(true){
  //     console.log(a)
  //     var a = 123;
  //   }    
  // }
  // scope();

// # 형 변환(Type conversion)
  // const a = 1
  // const b = '1'
  // console.log(a === b)


// #객체 활용 
  //  const jin = {
  //   firstName : 'jaejin',
  //   lastName : 'Lee',
  //   getFullName : function(){
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // }
  // console.log(jin.getFullName());

  // const amy = {
  //   firstName : 'Amy',
  //   lastName : 'Clerke',
  //   getFullName : function(){
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // }
  // console.log(amy.getFullName());

  // const neo = {
  //   firstName : 'Neo',
  //   lastName : 'Smith',
  //   getFullName : function(){
  //     return `${this.firstName} ${this.lastName}`
  //   }
  // }
  // console.log(neo.getFullName());



// #클래스

  // function User(first,last){
  //   this.firstName = first;
  //   this.lastName = last;
  // }
  // 
  // User.prototype.getFullName = function(){
  //   return `${this.firstName} ${this.lastName}`
  // }


  // 생성자 함수(하나의 객체 데이터가 생성됨)
  // heorpy , amy, neo 생성자함수로 생성된 '인스턴스'라고 함
  // const heorpy = new User('Heropy','Park')
  // const amy = new User('Amy','Clarke')
  // const neo = new User('Neo','Smith')

  // console.log(heorpy.getFullName());

  // console.log(amy);
  // console.log(amy.getFullName());

  // console.log(neo);
  // console.log(neo.getFullName());


  // console.log('==========')


  // function Egg(first,second){
  //   this.aa = first;
  //   this.bb = second;
    
  // }
  // Egg.prototype.getPlus = function(){
  //   return this.aa * 10 ;
  // }


  // const ex1 = new Egg(1,5);
  // console.log(ex1.getPlus());


// #this 
  // 일반(Nomal) 함수는 호출위체 따라 this정의!
  // 화살표(Arrow) 함수는 선언된 함수 범위 에서 this 정의!

  // const heropy = {
  //   name: 'jaejin',
  //   normal : function(){
  //     console.log(this.name)
  //   },
  //   arrow : () => {
  //     console.log(this.name)
  //   }
  // }

  // heropy.normal()
  // heropy.arrow()


  // const amy = {
  //   name : 'amy',
  //   normal : heropy.normal,
  //   arrow : heropy.arrow
  // }

  // console.log('%%%%%%%%%%%%%%%%%%')
  // function User(name){
  //   this.name = name
  // }

  // User.prototype.normal = function(){
  //   console.log(this.name);
  // }

  // User.prototype.arrow = () => {
  //   console.log(this.name);
  // }

  // const heropy = new User('Heropy');

  // //일반함수는 this가 생성위치에서 정의됨.
  // heropy.normal()
  // //
  // heropy.arrow();

console.log('%%%%%%%%%%%%%%%%%%')



// #this 
// 일반(Nomal) 함수는 호출위체 따라 this정의!
// 화살표(Arrow) 함수는 선언된 함수 범위 에서 this 정의!
//  const timer = {
//   name: 'Heropy!!',
//   timeout : function(){
//    setTimeout( ()=>{
//     console.log(this.name);
//    },2000)
//   }
// }

// timer.timeout();


// #호이스팅
  //함수 선언부가 유효범위 최상단으로 끌어올려지는 현상
  // const a = 7
  // const double = function(){
  //   console.log(a*2)
  // }
  // double()


// #타이머 함수
  //setTimeout(함수,시간): 일정 시간 후 함수 실행
  //setInterval(함수,시간): 시간 간격 마다 함수 실행
  //clearTimeout():설정된 Timeout함수를 종료 
  //clearInterval(): 설정된 Interval함수를 종료 

  // const timer = setTimeout(()=>{
  //   console.log('Jaejin');
  // },3000); //1000 ,1초 

  // const h1El = document.querySelector('#ex');

  // h1El.addEventListener('click', ()=>{
  //   clearTimeout(timer)
  // })

  // 
  // const interval = setInterval(()=>{
  //   console.log('이재진');
  // },2000);

  // h1El.addEventListener('click',()=>{
  //   clearInterval(interval);
  // })


  
// #콜백(Callback)-인수로 사용되는 함수 
  // 함수의 인수로 사용되는 또 다른 함수 
  // 콜백은 실행위치를 보장되는 용도로 활용된다.

  //setTimeout(함수, 시간)

  // function timeout(cb){
  //   setTimeout(()=>{
  //     console.log('jaejin!!')
  //     cb();
  //   },3000)
  // }
  // timeout(() => {
  //   console.log('하하이게 마지막 ');
  // });



// # 화살표 함수 
  // () => {}  vs function (){} 

  // const double = function(x){
  //   return x * 2
  // }

  // console.log('double : ',double(7));

  // const doubleArrow = (x) => {
  //   return {jaejin:'이재진'}
  // }

  // console.log('doubleArrow : ',doubleArrow());

  // //객체 데이터 반환시에는 괄호로 묶어야함 
  // x=> ({name:'jaejin'})


  // console.log('==========================')

  // //즉시 실행 함수
  // const c = 6;

  // let double_ = () =>{
  //   console.log(2*2);
  // }
  // double_();


  // //익명의 함수 즉시 실행 
  // (function(){
  //   console.log(c*2);
  // })();


  // (function(){
  //   console.log(c*10);
  // })()






//ES6 Classes

class User{
  //constructor: function (first,last){} 생략한거와 문법이 동일함.
  constructor(first,last){
    this.fristName = first;
    this.lastName = last;
  }
  getFullName(){
   return `${this.fristName} ${this.lastName}`;
  }
}

const heropy = new User('Heropy','Park');
const amy = new User('Amy','kkkk');

console.log(heropy);
console.log(heropy.getFullName());

