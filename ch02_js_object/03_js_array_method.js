let fruits = ["사과", "바나나", "키위"];

console.log(fruits.toString()); // 사과,바나나,키위

console.log(fruits.join("/")); // 사과/바나나/키위

let lastFruit = fruits.pop();
console.log(lastFruit); // 키위
console.log(fruits); // ['사과', '바나나']

let firstFruit = fruits.shift();
console.log(firstFruit); // 사과
console.log(fruits); // ['바나나']

console.log(fruits.unshift("레몬")); // 결과값 = 2
console.log(fruits); // ['레몬', '바나나']

// splice()
let fruits2 = ["Banana", "Orange", "Apple", "Mango"];

let fruits3 = fruits2.splice(2, 0, "Lemon", "Kiwi");
console.log(fruits2);
// ['Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango']

// concat()
let arr1 = ["김일", "김이"];
let arr2 = ["김삼", "김사"];
let arr3 = ["김오", "김육"];
let myStudents = arr1.concat(arr2, arr3);
console.log(myStudents);
//['김일', '김이', '김삼', '김사', '김오', '김육']

let Students = myStudents.slice(2);
console.log(Students);
// ['김삼', '김사', '김오', '김육']
let Students2 = myStudents.slice(3, 5);
//[ '김삼', '김사', '김오']
// 두 번째 argument는 종료 인덱스 넘버입니다.

// filter
// filter() 메서드를 활용하여 words 배열 내에 있는 단어의 길이가 5 이상인 애들만 추출해서 새로운 배열을 만들어 console에 출력하도록 하겠습니다.

let words = [
  "부산광역시",
  "부산시",
  "서울특별시",
  "서울",
  "경상남도 남해시",
  "남해시",
  "광주광역시",
  "경기도 광주시",
  "오사카부 오사카시",
  "오사카",
];

let result = words.filter(function (word) {
  return word.length > 4;
});

console.log(result); // -> 타입 : 배열
// ['부산광역시', '서울특별시', '경상남도 남해시', '광주광역시', '경기도 광주시', '오사카부 오사카시']

/*
  점수가 80점 이상인 사람만 가지고 새로운 배열을 작성하는 예시
*/

let persons = [
  {
    name: "김일",
    score: 78,
    city: "서울",
  },
  {
    name: "김이",
    score: 98,
    city: "대전",
  },
  {
    name: "김삼",
    score: 76,
    city: "대구",
  },
  {
    name: "김사",
    score: 100,
    city: "부산",
  },
];
console.log(persons);

let pass = persons.filter(function (person) {
  return person.score > 79;
});
console.log(pass);
/*
{name: '김이', score: 98, city: '대전'}

{name: '김사', score: 100, city: '부산'}

이상에서 주의할 점은 persons 를 가지고 새로운 배열을 만들었는데, persons의 element 도 여전히 object입니다.
score들을 가지고 비교했다고 해서 점수들을 element로 삼는 것이 아니라.
*/

// map()
let userList = [
  {
    firstName: "일",
    lastName: "김",
    email: "1@test.com",
  },
  {
    firstName: "이",
    lastName: "김",
    email: "2@test.com",
  },
  {
    firstName: "삼",
    lastName: "김",
    email: "3@test.com",
  },
  {
    firstName: "사",
    lastName: "김",
    email: "4@test.com",
  },
  {
    firstName: "오",
    lastName: "김",
    email: "5@test.com",
  },
];

// 콜백함수 (나중에 화살표 함수 배우고 조금 수정 들어감)
let koreanUserList = userList.map(function (user) {
  return {
    // 새로운 객체 리턴 - 중괄호
    fullName: user.lastName + user.firstName,
    firstName: user.firstName,
    lastName: user.lastName,
    email: user.email,
  };
});
console.log(userList); // fullName 없음

console.log(koreanUserList);
/*
{fullName: '김일', firstName: '일', lastName: '김', email: '1@test.com'}

{fullName: '김이', firstName: '이', lastName: '김', email: '2@test.com'}

{fullName: '김삼', firstName: '삼', lastName: '김', email: '3@test.com'}

{fullName: '김사', firstName: '사', lastName: '김', email: '4@test.com'}

{fullName: '김오', firstName: '오', lastName: '김', email: '5@test.com'}

*/

// reduce()

let scores = [40, 100, 1, 5, 25, 10]
let sum = scores.reduce (
  function(total, currentValue) {
    return total + currentValue;
  }
)

console.log(sum); // 101