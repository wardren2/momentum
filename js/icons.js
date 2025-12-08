const appsBtn = document.querySelector("#apps-btn");
const appGrid = document.querySelector("#app-grid");
let hideTimer = null;

// 펼치기/접기
function toggle() {
  appGrid.classList.toggle("hidden");
}

//hover 여부 확인 함수
function isHovering(element) {
  return element.matches(":hover");
}

// 기존 닫기 예약 취소
function cancelSchedule() {
  if (hideTimer) clearTimeout(hideTimer);
}

// 닫기 예약 설정
function setSchedule() {
  // 기존 예약 취소
  if (hideTimer) cancelSchedule();

  // 2초 후에도 버튼/그리드 둘 다 hover상태가 아니면 닫기
  hideTimer = setTimeout(() => {
    if (!isHovering(appsBtn) && !isHovering(appGrid)) {
      appGrid.classList.add("hidden");
    }
  }, 2000); // 2초
}

// 클릭시 펼치기/접기
appsBtn.addEventListener("click", toggle);

// 마우스가 벗어나면 닫기예약
appsBtn.addEventListener("mouseleave", setSchedule);
appGrid.addEventListener("mouseleave", setSchedule);

// 마우스가 다시 들어오면 닫기 취소
appsBtn.addEventListener("mouseenter", cancelSchedule);
appGrid.addEventListener("mouseenter", cancelSchedule);
