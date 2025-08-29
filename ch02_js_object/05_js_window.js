// alert("이것은 alert 창입니다.")

// confirm('정말 삭제하시겠습니까?');

// prompt("삭제시 '삭제' 입력");

// open("https://www.naver.com/");

function myFunction() {
  myExec = setTimeout(function () {
    console.log("5초 후 실행"), 5000;
  });
}

function myStopFunction() {
  console.log("취소합니다.");
  clearTimeout(myExec);
}

// 보통 onClick에 사용됩니다.

// 함수 호출
myFunction();