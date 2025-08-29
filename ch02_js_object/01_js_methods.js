// 빈 객체 생성
let person = new Object();

// 멤버 설정

person.firstname = "John";
person.lastName = "Doe";
person.age = 30;
person.getFullName = function () {
  return this.firstname + " " + this.lastName;
};
/*
8번 라인에 대한 해석을 위해서는 어제 배운 함수 표현식 관련한 부분을 알아야겠네요.

Js에서는 함수를 변수에 저장할 수 있었습니다.
그래서 객체명.함수명() 로 호출하게 될거니까 배운 방식으로 method라 할 수 있음
*/

console.log(person.getFullName());
// 결과값 :John Doe

// String-indexOf()
let str = '일이삼사오육칠팔구 십십일';
let emptySpace = str.indexOf(' '); // 9
console.log(emptySpace);
let lastTen = str.lastIndexOf('십'); // 11
console.log(lastTen);

// String-slice()
let str2 = "Apple, Banana, Kiwi";
let result2 = str2.slice(7, 12);
let result3 = str2.slice(7, 13);
console.log(result2); // Banan
console.log(result3); // Banana

/*
이상의 부분에서 주의할 점은 한계값 바로 앞까지만 불러온다는 점입니다. 그래서 12번 index까지라고 했을때 Banana라는 결과값이라고 착각할 수 있음

즉, slice() 의 두 번째 매개변수를 for문에서의 한계값 설저할 때 제가 이상.이하보다는 초과.미만을 사용하는 경우가 많은데, 그 이유가 여기서도 적용됨

*/
 
let result4 = str2.slice(7);
console.log(result4) // Banana, Kiwi

// 매개변수를 하나만 지정했을 경우, 그 시작인덱스로부터 문자열 끝까지 출력해줌

// 마이너스 인덱스 
// 맨 마지막 문자열의 index를 -1으로 잡고
// 앞으로 올때마다 -1을 더해줌
let result5 = str2.slice(-12);
console.log(result5); // Banana, Kiwi

/*
글면 굳이 마이너스 인덱스를 써야하는 경우를 가정하겠습니다.

자동차 차량 번호판
12일 55678
370수 5690

7번지를 출력하려고 하면 12일5678의 경우 index number 7이 없기 때문에 오류 발생함.
-1 쓰면 다 해결됨
*/

//String-substring()
let result6 = str2.substring(7, 13); // Banana
console.log(result6);
// 마이너스 인덱스를 지원하지 않기때문에 결과값이 예상고 다름
// let result7 = str2.substring(-12);
// console.log(result7); // Apple, Banana, Kiwi

// String-substr()
let result8 = str2.substr(0, 5); // 0번지로부터 5개
console.log(result8); // Apple
let result9 = str2.substr(-12);
console.log(result9); // Banana, Kiwi

let stc = '부산광역시 부산진구에 오신 것을 환영합니다.';
let replacedStc = stc.replace('부산', '서울');
console.log(replacedStc); //서울광역시 부산진구에 오신 것을 환영합니다.
// 특정 문자열의 첫 번째 값을 교체해줍니다.
let eStc = 'Please visit Seoul and Seoul';
let rpdStc = eStc.replace('SEOUL', 'Busan');
console.log(rpdStc);
//Please visit Seoul and Seoul
// 유니코드로 대문자와 소문자 값이 구분됨

let rpdStc2 = eStc.replace(/SEOUL/i, 'Busan');
console.log(rpdStc2);
// Please visit Busan and Seoul
// 정규식 설명 예정 
// i = insensitive의 축약어
// 덜 깐깐하게 보겠다는것 - 대소문자 구분안하고 그냥 찾음

let rpdStc3 = eStc.replace(/Seoul/g, 'Busan');
console.log(rpdStc3);
// Please visit Busan and Busan
// g = global 약자
// 전부 다 바꿔줌

let txt1 = 'Hello';
let txt2 = 'Word';
let txt3 = txt1.concat(' ', txt2);
console.log(txt3); // Hello Word
let txt4 = 'Hello' + ' ' + 'Word';

// 실무 사용 예시 
// 우리나라에서는 이름이 성 이름이 붙어있지만 다른 나라애서는 이름 성 / 성 이름 에서 공백으로 구분하는 경우가 있습니다.
// 이상의 경우에 firstName / middleName / lastName 으로 각각 변수에 데이터를 저장하고 
// fullName 변수에 .concat()을 적용한 다음 출력하는 방법을 사용할 수 있습니다

// String-trim()
let txtSpace = '     Hello,Word!     ';
// 매개변수 있음, 리턴타입x
console.log(txtSpace.trim()); 

// String-charAt()
let charAtTxt = "I'm tired,😒";
console.log(charAtTxt.charAt(4)); // t

// String-split()
let birtday = '1988-07-09';
let birtdayArray = birtday.split('-');
// - 를 기준으로 나눠서 배열로 만들겠다
// 그럼 인덱스는 3번까지
console.log(birtdayArray);
/**
 * (3) ['1988', '07', '09']0: "1988"1: "07"2: "09"length: 3[[Prototype]]: Array(0)
 */