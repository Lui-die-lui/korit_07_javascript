function hello2(name) {
  console.log(`Hello${name}. 환영합니다!`);
}

hello2("김일");
// durl qustnaudrhk
let type = "student";
let score = {
  // type의 값이 동일해야함
  [type]: "Josh",
  score: 92,
};


console.log(score.student);
// [type]으로 작성했지만 실제 property의 key값은 'student'이다

// Spread 연산자
let arr1 = [4, 5, 6];
let arr2 = [1, 2, 3];

// 결과값이 전체 다 나오게 하려면
let arr3 = arr2.concat(arr1);
console.log(arr3);

// spread를 활용하게 됐을때는
let arr4 = [...arr2, ...arr1];
// 배열 내부 element만 받음
console.log(arr4);
// 중요!
/*
...arr2와 같이 작성했을 때, arr2라는 배열 자체가 들어가는 것이 아니라, 배열 내부의 element들을 하나씩 가지고 온다고 생각하는 것이 좋음

즉 ,let arr4 = [...arr2, ...arr1] 은 외부에 []가 있는 것을 봤을 때 새로 배열을 생성한 것이고, 거기의 내부에 arr2의 element들을 순서대로 집어넣고, 그 다음 arr1의 element들을 순서대로 집어넣어서 완성했다고 해석 가능 
*/

function getPerson() {
  return {
    fName: "John",
    lName: "Doe",
    age: 20,
    email: "a@test.com",
    city: "NewYork",
    country: "USA",
  };
}

let { fName, lName } = getPerson();

// 사용하려는 데이터가 저장되어있는 key 이름만 정의하면, 해당 키를 갖는 값을 바로 사용 가능함.
// 즉 {}내의 요소들은 객체의 key값과 같아야함

console.log(fName);
console.log(lName);
let person = getPerson(); // return 값이 JS 객체이므로 person은 JS객체의 객체명이 됩니다.

// 여태까지의 방식은 객체명.key 혹은 객체명.['key']여야만 했지ㅣ만

console.log(person.fName);
console.log(person.lName);
// 객체 구조분해를 쓰게되면 필요한 key-value 만 추출 가능

function displayFullname({ fName, lName }) {
  console.log(`${fName}${lName}`);
}
displayFullname.getPerson;

function getScores() {
  return [70, 80, 90];
}

let scores = getScores();

let x = scores[0],
  y = scores[1],
  z = scores[2];

let [x1, y1, z1] = getScores();

console.log(x1);
console.log(y1);
console.log(z1);

/*
  이상의 개념은 react 및 eventhandler 관련 부분에서 자주 쓰게 되는데, 그때 다시 설명은 드릴겁니다.
 */
