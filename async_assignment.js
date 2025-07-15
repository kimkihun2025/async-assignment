// 상수 선언 (const)
const MAX_TIME = 10;
const MIN_TIME = 1;

// 변수 선언 (let, var)
let timerCount; // 남은 시간 저장
var timerMessage = ""; // 출력 메시지 저장

// 타이머 시작 함수 (함수 선언문, 기본값 사용)
function startTimer(seconds = 10) {
    // 버튼 비활성화
    document.getElementById("startTimer").disabled = true;
    // 에러 스타일 제거
    document.getElementById("timerDisplay").classList.remove("error");

    timerCount = seconds;
    // setInterval로 1초마다 실행
    const intervalId = setInterval(function () {
        // 타이머 메시지 갱신
        timerMessage = "타이머: " + timerCount + "초";
        document.getElementById("timerDisplay").textContent = timerMessage;

        timerCount--;

        // 타이머 종료 조건
        if (timerCount < 0) {
            clearInterval(intervalId); // 타이머 정지
            document.getElementById("timerDisplay").textContent =
                "타이머 종료!";
            document.getElementById("startTimer").disabled = false; // 버튼 활성화
        }
    }, 1000);
}

// 버튼 클릭 이벤트 리스너 등록
document.getElementById("startTimer").addEventListener("click", function () {
    // 입력값 가져오기
    const inputValue = document.getElementById("timerInput").value;
    const seconds = Number(inputValue);

    // 입력값 유효성 검사 (조건문, 연산자, isNaN, >=, <=, &&)
    if (
        isNaN(seconds) ||
        seconds < MIN_TIME ||
        seconds > MAX_TIME ||
        inputValue.trim() === ""
    ) {
        // 에러 메시지 출력
        document.getElementById("timerDisplay").textContent =
            "유효한 숫자(1-10)를 입력하세요!";
        document.getElementById("timerDisplay").classList.add("error");
        return;
    }

    // 타이머 시작
    startTimer(seconds);
});