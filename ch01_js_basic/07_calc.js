/* 
조건문을 활용하고, 숫자 두 개와 사칙연산 기호 하나를 매개변수로 받아서 그에 맞는 계산을 하는
계산기 함수를 정의하도록 하겠습니다.
*/

let calc = function (x, y, operator) {
  // 매개변수의 자료형이나 선언자가 없다는 점이 특이
  if (operator === "+") {
    return x + y;
  } else if (operator === "-") {
    return x - y;
  } else if (operator === "*") {
    return x * y;
  } else if (operator === "/") {
    return x / y;
  }
};

let Result1 = calc(5, 7, "+");
console.log(Result1);
let Result2 = calc(5, 7, "-");
console.log(Result2);
let Result3 = calc(5, 7, "*");
console.log(Result3);
let Result4 = calc(14, 7, "/");
console.log(Result4);
