const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// 대문자로 표기하는 변수 : 일반적으로 string만 포함된 변수. string을 저장하고 싶을 때 사용함. + 중요한 변수가 아니라서.


/**
 * form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다. << 우리가 원하는 것이 아님!
preventDefault() 함수를 추가함으로써 브라우저의 기본 동작을 막을 수 있다!!
a 태그로 지정한 링크를 클릭하면 기본적으로 페이지를 이동한다 > preventDefault( ) 함수로 이동을 막을 수 있다.
 */


/** 2-2. username이 없고 submit했을 때 실행되는 함수*/
function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  paintGreetings(); // 로컬에 저장했으므로 함수로 이동
}

/**  2-1. 로컬에 username이 있을 때 실행되는 함수 */
function paintGreetings() {
  const username = localStorage.getItem(USERNAME_KEY);
  //greeting.innerText = 'Hello ' + username;   // 밑과 같다.
  greeting.innerText = `Hello ${username}`; // string과 변수를 하나로 합쳐주고 있음. 위의 코드보다 더 자주 사용됨.
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);


// 1. localStorage 확인 
if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);  // 2-2.submit 이벤트를 기다렸다가, submit event가 발생하면 onLoginSubmit()가 실행됨
} else {
  // show the greetings
  paintGreetings(); // 2-1.
}

loginForm.addEventListener("submit", onLoginSubmit);







