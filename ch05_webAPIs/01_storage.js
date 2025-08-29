// locallStorage 에 문자열 데이터와 배열 데이터를 저장하는 예시
if (typeof Storage !== "undefined") {
  // Storage가 검색됐으니 별 문제 X
  localStorage.setItem("title", "review : 파이팅"); //  키 밸류
  /*
  .setItem() 라는 메서드가 있고, 거기에 2개의 argument를 집어넣습니다.
  두 번째 매개변수이 value값의 경우, 원래 string 자료형이라면 있는 그대로.
  */

  // 집어젛을 데이터 예시 - JS 배열인데,, 내부 element가 객체 -> string 으로의 벼변환과정 필요
  const users = [
    {
      id: 1,
      name: "김일",
    },
    {
      id: 2,
      name: "김이",
    },
  ];
  localStorage.setItem("users", JSON.stringify(users)); // ('로컬스토리지에 들어갈 키 이름', JSON 스트링 배열로 변경해서 넣을(객체))
}

// localStorage 내에 있는 데이터를 조회하는 예시
if (Storage !== undefined) {
  console.log(localStorage.getItem("title"));
  console.log(localStorage.getItem("users"));
  // 위 두 코드의 자료형은 전부 string
  // 그래서 그냥 2번째 코드를 string으로 쓸 거면 별 문제가 없지만 굳이 객체 정보로 저장한걸 string 으로 쓸 리가ㅏ 없음
  // 다시 원상복구하는 method
  console.log(JSON.parse(localStorage.getItem("users")));
  const userFormLocal = JSON.parse(localStorage.getItem("users"));
  console.log(userFormLocal[0].name);
}

// 삭제 예시
localStorage.removeItem('title'); // 
