const clock = document.querySelector("h2#clock");

/**
 * interval : 매번 일어남. ex) 2초마다
 */

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //1초 뒤에 실행되기 전에, html파일을 열었을 때 바로 작동해야 함.
setInterval(getClock, 1000); // 1000ms : 1초

// setInterval(sayHello, 5000);  //5000ms : 5초
// setTimeout(sayHello, 1000); // 1초 기다렸다가 한번만 실행.


// console.log(date.getFullYear()); // 년도
// console.log(date.getDate()); // 일자
// console.log(date.getDay()); // 요일 : 일:0 ~ 토:6
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


// .padStart : String에만 사용 가능
// console.log("1".padStart(2,"0")); // "1"이 2자리보다 작다면, 앞에 "0"을 추가한다. (최소한 2자리여야 한다)

// console.log("1".padStart(2, "0"));
// console.log("11".padStart(2, "0"));