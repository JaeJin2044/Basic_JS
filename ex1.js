

//호이스팅
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

// const a = 7


// const double = function(){
//   console.log(a*2)
// }
// double()

//타이머 함수
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


// // 
// const interval = setInterval(()=>{
//   console.log('이재진');
// },2000);

// h1El.addEventListener('click',()=>{
//   clearInterval(interval);
// })



// 콜백(Callback)-인수로 사용되는 함수 
// 함수의 인수로 사용되는 또 다른 함수 
// 콜백은 실행위치를 보장되는 용도로 활용된다.

//setTimeout(함수, 시간)

function timeout(cb){
  setTimeout(()=>{
    console.log('jaejin!!')
    cb();
  },3000)
}
timeout(() => {
  console.log('하하이게 마지막 ');
});



