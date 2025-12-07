const toDoForm = document.getElementById("todo-form");
const todoInput = toDoForm.querySelector("#todo-form input");   // id가 todo-form인 form 안에서 input을 찾기
const toDoList = document.getElementById("todo-list");
const TODOS_KEY = "todos";
let toDos = [];
// localStorage에는 array를 저장할 수 없고, 오직 텍스트만 저장할 수 있다.

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));  // stringify: 변수 등을 문자열로 바꿈
  /**
   * (STRINGIFY = 변수 등을 문자열로 바꿈,PARSE = 문자열을 JSON으로 바꿈)
      localstorage 에서는 문자열밖에 저장할 수 있기 때문에
      stringify로 Array 자체를 문자열로 만들고 (["할일1","할일2"] ==> "["할일1","할일2"]")
      나중에 localstorage에서 가지고 온 다음 parse로 문자열을 Array 로 만들어서
      불러들이기 할 것임.
   */
}


function deleteTodo(event) {
  console.log(event.composedPath());   // [button, li, ul#todo-list, body, html, document, Window]  // (하위요소)button -> li -> ...-> (상위 요소)
  const li = event.target.parentElement;  // button의 부모 : li
  console.log(typeof li.id);  // string 이므로 변환해야함

  li.classList.add('strike');

  setTimeout(() => {
    li.classList.add('completed');
    setTimeout(() => {
      toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
      li.remove();
      saveTodos();
    }, 300);
  }, 300);
}


function paintTodo(newTodo) {
  console.log("I'll paint new todo", newTodo);
  const li = document.createElement("li");        // <li> 요소 생성
  li.id = newTodo.id;
  const span = document.createElement("span");    // 할 일 텍스트를 담을 <span> 생성
  const button = document.createElement("button"); // 삭제용 <button>을 생성

  span.innerText = newTodo.text;                  // <span> 요소에 입력칸에 입력한 내용을 추가
  button.innerText = "delete";

  button.addEventListener("click", deleteTodo);

  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);                      // <ul> 요소에 <li> 추가
}

function handleTodoSubmit(event) {
  event.preventDefault(); // submmit의 기본 동작인 새로고침 방지
  const newTodo = todoInput.value;    // todo 입력내용을 변수에 옮기고
  todoInput.value = "";               // todo 입력란을 비우기

  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  };

  toDos.push(newTodoObj);                     // 입력된 내용을 배열에 저장
  paintTodo(newTodoObj);               // 입력된 내용을 화면에 그려주는 함수 호출
  saveTodos();                     // 로컬스토리지에 저장하는 함수 호출
}

toDoForm.addEventListener("submit", handleTodoSubmit);



// 1. 처음에 시작 : savedTodos가 있다면

const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) { //=== localStorage.getItem(TODOS_KEY) !== null
  const parsedTodos = JSON.parse(savedTodos);
  toDos = parsedTodos;
  parsedTodos.forEach(paintTodo);   // forEach : parsedTodos가 가지고 있는 각각의 item에 대해 paintTodo 실행

  /**
   * forEach(paintTodo())라고 쓰면 안 되는 이유
   * : 이렇게 쓰면 forEach가 실행되기도 전에
   * paintTodo()를 "지금 즉시" 실행함
   * 그리고 paintTodo의 리턴값(undefined)을 forEach에 넘겨버림
   * 결국 forEach가 받을 콜백 함수가 없어져서 에러가 나.
   */
}

function sexyFilter(item) {
  return item !== 3;
}